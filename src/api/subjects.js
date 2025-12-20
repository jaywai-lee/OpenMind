import instance from './axios';

export const createSubject = (name) =>
  instance.post('/subjects/', {
    name: name.trim(),
    team: '21-1',
  });

export const getSubject = (subjectId) =>
  instance.get(`/subjects/${subjectId}/`).then((res) => res.data);
