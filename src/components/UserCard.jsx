import { Link } from 'react-router-dom';
import styles from './UserCard.module.css';
import messageImg from '../assets/icons/messages.svg';

function UserCard({ user }) {
  return (
    <Link to={`/post/${user.id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.cardProfile}>
          <img
            className={styles.userImage}
            src={user.imageSource}
            alt={`${user.name} 프로필`}
          />
          <span className={styles.name}>{user.name}</span>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardLeft}>
            <img src={messageImg} alt="대화 아이콘" />
            <span className={styles.qna}>받은 질문</span>
          </div>
          <span className={styles.count}>{user.questionCount}개</span>
        </div>
      </article>
    </Link>
  );
}

export default UserCard;
