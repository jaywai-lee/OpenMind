import React from 'react';
import { useEffect, useState } from 'react';
import { getSubject } from '../api/subjects';
import styles from './UserCard.module.css';
import UserImage from '../assets/images/userimage-sample.png';
import messageImg from '../assets/icons/messages.svg';
import { Link } from 'react-router-dom';

function UserCard() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    async function loadUserList() {
      try {
        const responseData = await getSubject();
        console.log('성공:', responseData);
        setLists(responseData.results);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }
    loadUserList();
  }, []);
  return (
    <div className={styles.cardContainer}>
      {lists &&
        lists.map((result) => (
          <Link to={`/post/${result.id}`} key={result.id}>
            <div className={styles.UserCard}>
              <div className={styles.cardProfile}>
                <img
                  className={styles.userImage}
                  src={result.imageSource}
                  alt={`${result.name} 프로필`}
                />
                <span className={styles.name}>{result.name}</span>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardLeft}>
                  <img src={messageImg} alt="대화아이콘" />
                  <span className={styles.qna}>받은 질문</span>
                </div>
                <span className={styles.count}>{result.questionCount}개</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default UserCard;
