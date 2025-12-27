import styles from './UserProfile.module.css';
import LinkShare from '../assets/icons/link-share.svg?react';
import KakaoShare from '../assets/icons/kakao-share.svg?react';
import FacebookShare from '../assets/icons/facebook-share.svg?react';
import { copyLink, shareKakao, shareFacebook } from '../utils/share';
import { useToast } from '../context/ToastContext';

function UserProfile({ subject }) {
  const { toast } = useToast();
  const currentUrl = window.location.href;
  const handleCopyLink = async () => {
    const success = await copyLink(currentUrl);
    if (success) {
      toast('URL이 복사되었습니다');
    } else {
      toast('URL 복사에 실패했습니다');
    }
  };
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
          <LinkShare />
        </button>
        <button
          type="button"
          onClick={handleKakaoShare}
          aria-label="카카오톡 공유"
        >
          <KakaoShare />
        </button>
        <button
          type="button"
          onClick={handleFacebookShare}
          aria-label="페이스북 공유"
        >
          <FacebookShare />
        </button>
      </div>
    </section>
  );
}

export default UserProfile;
