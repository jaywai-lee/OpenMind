import FeedCard from '../components/FeedCard';
import FeedHeader from '../components/FeedHeader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DUMMY_DATA = [
  {
    id: 1,
    content: '좋아하는 영화는?',
    createdAt: '2025-12-16T00:00:00Z',
    like: 3,
    dislike: null,
    answer: {
      id: 10,
      content: '저는 해리포터를 가장 좋아합니다.호그와트의 방학이 끝나기만을 기다리던 해리는 머글을 상대로 마법을 써서 퇴학당했다는 편지를 받는다. 이후 오러들에게 이끌려 불사조 기사단의 집결지에 도착한 해리는 법정에서 자신의 결백을 주장하고, 볼드모트가 돌아왔다는 사실을 알리지만 사람들은 이를 믿지 않는다. 이후 마법부 장관은 해리를 비롯한 호그와트 학생들을 감시하기 위해 돌로레스 엄브릿지를 교수로 파견하고, 학생들은 덤블도어의 군대를 조직해서 이에 맞선다.',
      createdAt: '2025-12-17T00:00:00Z',
      name: '유지효',
    },
  },
  {
    id: 2,
    content: '제일 좋아하는 음식은?',
    createdAt: '2025-12-10T00:00:00Z',
    like: 5,
    dislike: 10,
    answer: {
      id: 11,
      content: '저는 회를 가장 좋아합니다.',
      createdAt: '2025-12-12T00:00:00Z',
      name: '유지효',
    },
  },
  {
    id: 3,
    content: '제일 가고 싶은 여행지가 있나요? 있으면 알려주세요!!!',
    createdAt: '2025-12-16T00:00:00Z',
    like: 1,
    dislike: 6,
    answer: {
      id: 12,
      content: '저는 미국을 가보고 싶습니다.',
      createdAt: '2025-12-18T00:00:00Z',
      name: '유지효',
    },
  },
  {
    id: 4,
    content: '당신이 제일 좋아하는 간식은?',
    createdAt: '2025-12-17T00:00:00Z',
    like: 7,
    dislike: 1,
    answer: null,
  },
];

function AnswerPage() {
  const [ feeds, setFeeds ] = useState([]);

  useEffect(() => {
    setFeeds(DUMMY_DATA);
  }, []);

  return (
    <>
      <FeedHeader />
      <FeedCard feeds={feeds} />
    </>
  );
}

export default AnswerPage;
