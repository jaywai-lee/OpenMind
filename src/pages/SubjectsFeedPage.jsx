import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSubject } from '../api/subjects';
import { getQuestionsBySubject, postQuestionReaction } from '../api/questions';
import { useToast } from '../context/ToastContext';
import storage from '../utils/storage';
import FeedHeader from '../components/FeedHeader';
import SubjectsFeedCard from '../components/SubjectsFeedCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import QuestionModal from '../components/common/modal/QuestionModal';
import SubjectsFeedFooter from '../components/SubjectsFeedFooter';

function SubjectsFeedPage() {
  const { toast } = useToast();
  const { id: feedId } = useParams();
  const [feed, setFeed] = useState({
    subject: null,
    questions: [],
    count: 0,
    next: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const didSubmitRef = useRef(false);
  const hasMore = Boolean(feed.next);
  const userId = storage.get('userId', null);
  const isMyFeed = userId && feed.subject?.id === userId;

  const initFetch = useCallback(async () => {
    if (!feedId) return;
    try {
      setIsLoading(true);
      setError(null);
      const [subjectData, questionsData] = await Promise.all([
        getSubject(feedId),
        getQuestionsBySubject(feedId, {
          limit: 4,
          offset: 0,
        }),
      ]);
      setFeed({
        subject: subjectData,
        questions: questionsData.results,
        count: questionsData.count,
        next: questionsData.next,
      });
    } catch (err) {
      setError('데이터를 불러오지 못했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [feedId]);

  useEffect(() => {
    setFeed({
      subject: null,
      questions: [],
      count: 0,
      next: null,
    });
    initFetch();
  }, [initFetch]);

  const fetchNextQuestions = async () => {
    if (!feed.next || isLoading) return;
    try {
      setIsLoading(true);
      const data = await fetch(feed.next).then((res) => res.json());
      setFeed((prev) => ({
        ...prev,
        questions: [...prev.questions, ...data.results],
        next: data.next,
      }));
    } catch (err) {
      console.error('추가 질문 로딩 실패', err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreRef = useInfiniteScroll({
    onIntersect: fetchNextQuestions,
    enabled: hasMore,
    loading: isLoading,
    rootMargin: '100px',
  });

  const handleReaction = async (questionId, type) => {
    try {
      const updatedQuestion = await postQuestionReaction(questionId, type);
      setFeed((prev) => ({
        ...prev,
        questions: prev.questions.map((q) =>
          q.id === updatedQuestion.id ? updatedQuestion : q,
        ),
      }));
    } catch (err) {
      console.error('리액션 처리 실패', err);
    }
  };

  const handleRefresh = async () => {
    didSubmitRef.current = true;
    await initFetch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = () => {
    didSubmitRef.current = false;
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (didSubmitRef.current) {
      toast('질문이 등록되었습니다');
    } else {
      toast('질문 작성이 취소되었습니다');
    }
    didSubmitRef.current = false;
  };

  return (
    <>
      <FeedHeader subject={feed.subject} />
      {error && <p>{error}</p>}
      {!error && (
        <SubjectsFeedCard
          subject={feed.subject}
          count={feed.count}
          questions={feed.questions}
          onReact={handleReaction}
        />
      )}
      <div ref={loadMoreRef} style={{ height: 1 }} />
      {isLoading && <p style={{ textAlign: 'center' }}>불러오는 중...</p>}
      <SubjectsFeedFooter isMyFeed={isMyFeed} onOpenModal={handleOpenModal} />
      <QuestionModal
        isOpen={isModalOpen}
        subject={feed.subject}
        onClose={handleCloseModal}
        onRefresh={handleRefresh}
      />
    </>
  );
}

export default SubjectsFeedPage;
