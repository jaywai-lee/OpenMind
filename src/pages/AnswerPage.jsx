import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSubject } from '../api/subjects';
import { getQuestionsBySubject, postQuestionReaction } from '../api/questions';
import FeedCard from '../components/FeedCard';
import FeedHeader from '../components/FeedHeader';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

function AnswerPage() {
  const { id: subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!subjectId) return;
    const initFetch = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const [subjectData, questionsData] = await Promise.all([
          getSubject(subjectId),
          getQuestionsBySubject(subjectId, {
            limit: 4,
            offset: 0,
          }),
        ]);
        setSubject(subjectData);
        setQuestions(questionsData.results);
        setCount(questionsData.count);
        setNext(questionsData.next);
        setHasMore(!!questionsData.next);
      } catch (err) {
        setError('데이터를 불러오지 못했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    setQuestions([]);
    setNext(null);
    setHasMore(true);

    initFetch();
  }, [subjectId]);

  const fetchNextQuestions = async () => {
    if (!next || isLoading || !hasMore) return;
    try {
      setIsLoading(true);
      const data = await fetch(next).then((res) => res.json());
      setQuestions((prev) => [...prev, ...data.results]);
      setNext(data.next);
      setHasMore(!!data.next);
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
      setQuestions((prev) =>
        prev.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q)),
      );
    } catch (err) {
      console.error('리액션 처리 실패', err);
    }
  };

  return (
    <>
      <FeedHeader subject={subject} />
      {error && <p>{error}</p>}
      {!error && (
        <FeedCard
          subject={subject}
          count={count}
          questions={questions}
          onReact={handleReaction}
        />
      )}
      <div ref={loadMoreRef} style={{ height: 1 }} />
      {isLoading && <p style={{ textAlign: 'center' }}>불러오는 중...</p>}
    </>
  );
}

export default AnswerPage;
