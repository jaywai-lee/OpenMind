import instance from './axios';

export const createSubject = (name) =>
  instance.post('/subjects/', {
    name: name,
    team: '21-1',
  });

export const getSubject = () =>
  instance
    .get(`/subjects/`, {
      params: {
        limit: 8,
        offset: 0,
        team: '21-1',
      },
    })
    .then((res) => res.data);

export const getSubjects = (subjectId) =>
  instance.get(`/subjects/${subjectId}/`).then((res) => res.data);
