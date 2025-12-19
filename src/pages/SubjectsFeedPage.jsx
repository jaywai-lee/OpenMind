import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get, post } from '../api/axios';
import FeedHeader from '../components/FeedHeader';
import SubjectsFeedCard from '../components/SubjectsFeedCard';
import FloatingButton from '../components/FloatingButton';

function SubjectsFeedPage() {
  const { id: subjectId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    if (!subjectId) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [subject, questionsData] = await Promise.all([
          get(`/21-1/subjects/${subjectId}/`),
          get(`/21-1/subjects/${subjectId}/questions/`),
        ]);
        setSubject(subject);
        setQuestions(questionsData.results);
        setCount(questionsData.count);
      } catch (err) {
        setError('데이터를 불러오지 못했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [subjectId]);

  const handleReaction = async (questionId, type) => {
    try {
      const updatedQuestion = await post(
        `/21-1/questions/${questionId}/reaction/`,
        { type },
      );
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
      {isLoading && <p>로딩 중...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <SubjectsFeedCard
          subject={subject}
          count={count}
          questions={questions}
          onReact={handleReaction}
        />
      )}
      <FloatingButton onClick={() => console.log('button clicked')} />
    </>
  );
}

export default SubjectsFeedPage;
