/**
 * 로컬스토리지 저장 유틸
 * 저장시: storage.set('userInfo', 값);
 * 로드시: storage.get('userInfo');
 * 삭제시: storage.remove('userInfo');
 */
const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('저장 실패', e);
    }
  },

  get(key, defaultValue = null) {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },
};

export default storage;
