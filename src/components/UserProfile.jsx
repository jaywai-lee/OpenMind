import styles from './UserProfile.module.css';
import userImage from '../assets/images/userimage-sample.png';
import linkShare from '../assets/icons/link-share.svg';
import kakaoShare from '../assets/icons/kakao-share.svg';
import facebookShare from '../assets/icons/facebook-share.svg';

function UserProfile({ subject }) {
  return (
    <section className={styles.profile}>
      <img
        className={styles.avatar}
        src={subject.imageSource}
        alt={subject.name}
      />
      <p className={styles.nickname}>{subject.name}</p>
      <div className={styles.share}>
        <button type="button" aria-label="링크 공유">
          <img src={linkShare} alt="url share" />
        </button>
        <button type="button" aria-label="카카오톡 공유">
          <img src={kakaoShare} alt="kakao share" />
        </button>
        <button type="button" aria-label="페이스북 공유">
          <img src={facebookShare} alt="facebook share" />
        </button>
      </div>
    </section>
  );
}

export default UserProfile;
