import storage from '../utils/storage';

function useReactionStorage(userId, subjectId) {
  const storageKey =
    userId && subjectId ? `reactions-${userId}-${subjectId}` : null;
  const reactions = storageKey ? storage.get(storageKey, {}) : {};
  const getMyReaction = (questionId) => reactions[questionId];
  const setReaction = (questionId, type) => {
    if (!storageKey) return;
    storage.set(storageKey, {
      ...reactions,
      [questionId]: type,
    });
  };
  return {
    enabled: Boolean(storageKey),
    getMyReaction,
    setReaction,
  };
}

export default useReactionStorage;
