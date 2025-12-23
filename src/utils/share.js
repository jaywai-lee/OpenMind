/** 링크 복사 */
export async function copyLink(url) {
  try {
    await navigator.clipboard.writeText(url);
    console.log('링크가 클립보드에 복사되었습니다.'); //Toast 추가 예정
    return true;
  } catch (err) {
    console.log('클립보드 복사 실패', err);
    return false;
  }
}

/** 카카오톡 공유 */
const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_JS_KEY;
function initKakao() {
  if (!window.Kakao) {
    console.error('Kakao SDK not loaded');
    return;
  }
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_JS_KEY);
    console.log('Kakao initialized');
  }
}

export function shareKakao({ url, title, description, imageUrl }) {
  initKakao();
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title,
      description,
      imageUrl,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons: [
      {
        title: '질문하러 가기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
}

/** 페이스북 공유 */
export function shareFacebook(url) {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url,
  )}`;

  window.open(
    shareUrl,
    '_blank',
    'width=800, height=600, noopener, noreferrer',
  );

  console.log('페이스북 공유');
}
