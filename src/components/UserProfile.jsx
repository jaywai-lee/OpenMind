import styles from './UserProfile.module.css';
import linkShare from '../assets/icons/link-share.svg';
import kakaoShare from '../assets/icons/kakao-share.svg';
import facebookShare from '../assets/icons/facebook-share.svg';
import { copyLink, shareKakao, shareFacebook } from '../api/share';

function UserProfile({ subject }) {
  const currentUrl = window.location.href;
  const handleCopyLink = () => copyLink(currentUrl);
  const handleFacebookShare = () => shareFacebook(currentUrl);
  const handleKakaoShare = () => {
    shareKakao({
      url: currentUrl,
      title: `${subject.name}님의 질문 피드`,
      description: `${subject.name}님에게 질문을 남겨보세요.`,
      imageUrl: subject.imageSource,
    });
  };

  return (
    <section className={styles.profile}>
      <img
        className={styles.avatar}
        src={subject.imageSource}
        alt={subject.name}
      />
      <p className={styles.nickname}>{subject.name}</p>
      <div className={styles.share}>
        <button type="button" onClick={handleCopyLink} aria-label="링크 공유">
          <img src={linkShare} alt="url share" />
        </button>
        <button
          type="button"
          onClick={handleKakaoShare}
          aria-label="카카오톡 공유"
        >
          <img src={kakaoShare} alt="kakao share" />
        </button>
        <button
          type="button"
          onClick={handleFacebookShare}
          aria-label="페이스북 공유"
        >
          <img src={facebookShare} alt="facebook share" />
        </button>
      </div>
    </section>
  );
}

export default UserProfile;
