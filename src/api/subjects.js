import instance from './axios';

export const createSubject = (name) =>
  instance.post('/subjects/', { name }).then((res) => res.data);

export const getSubjectList = (params) =>
  instance.get(`/subjects/`, { params }).then((res) => res.data);

export const getSubjects = (subjectId) =>
  instance.get(`/subjects/${subjectId}/`).then((res) => res.data);
