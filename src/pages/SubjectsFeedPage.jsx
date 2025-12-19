import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../api/axios';
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
        />
      )}
      <FloatingButton onClick={() => console.log('button clicked')} />
    </>
  );
}

export default SubjectsFeedPage;
