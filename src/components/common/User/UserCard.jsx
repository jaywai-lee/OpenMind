import { Link } from 'react-router-dom';
import styles from './UserCard.module.css';
import messageImg from '../../../assets/icons/messages.svg';

/**
 * 질문리스트 공통컴포넌트
 * user: (object) 유저 리스트
 * @param { user }
 * @returns
 */
function UserCard({ user = {} }) {
  const { id, name, imageSource, questionCount } = user;
  if (!id) return null;
  return (
    <Link to={`/post/${id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.cardProfile}>
          <img
            className={styles.userImage}
            src={imageSource}
            alt={`${name} 프로필`}
          />
          <span className={styles.name}>{name}</span>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardLeft}>
            <img src={messageImg} alt="대화 아이콘" />
            <span className={styles.qna}>받은 질문</span>
          </div>
          <span className={styles.count}>{questionCount}개</span>
        </div>
      </article>
    </Link>
  );
}

export default UserCard;
