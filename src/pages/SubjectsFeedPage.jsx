import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeedHeader from '../components/FeedHeader';
import SubjectsFeedCard from '../components/SubjectsFeedCard';

const DUMMY_QUESTIONS = [
  {
    id: 1,
    content: '좋아하는 영화는?',
    createdAt: '2025-12-16T00:00:00Z',
    like: 3,
    dislike: 1,
    answer: null,
  },
  {
    id: 2,
    content: '좋아하는 음식은?',
    createdAt: '2025-12-17T00:00:00Z',
    like: 5,
    dislike: 0,
    answer: {
      id: 10,
      content: '회를 좋아합니다.',
      createdAt: '2025-12-18T00:00:00Z',
      author: {
        name: '아초는고양이',
      },
    },
  },
];

function FeedDetailPage() {
  const { id: subjectId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setQuestions(DUMMY_QUESTIONS);
    setCount(DUMMY_QUESTIONS.length);
  }, subjectId);

  return (
    <>
      <FeedHeader />
      <SubjectsFeedCard count={count} questions={questions} />
    </>
  );
}

export default FeedDetailPage;
