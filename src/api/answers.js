import instance from './axios';

export const createAnswer = (questionId, answerData) =>
  instance
    .post(`/questions/${questionId}/answers/`, answerData)
    .then((res) => res.data);

export const updateAnswer = (answerId, answerData) =>
  instance
    .patch(`/answers/${answerId}/`, answerData)
    .then((res) => res.data);