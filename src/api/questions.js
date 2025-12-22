import instance from './axios';

export const getQuestionsBySubject = (subjectId, params) =>
  instance
    .get(`/subjects/${subjectId}/questions/`, { params })
    .then((res) => res.data);

export const postQuestionReaction = (questionId, type) =>
  instance
    .post(`/questions/${questionId}/reaction/`, { type })
    .then((res) => res.data);

export const createQuestion = (subjectId, questionData) =>
  instance
    .post(`/subjects/${subjectId}/questions/`, questionData)
    .then((res) => res.data);
