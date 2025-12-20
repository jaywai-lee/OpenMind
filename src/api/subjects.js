import instance from './axios';

export const createSubject = (name) =>
  instance.post('/subjects/', {
    name: name.trim(),
    team: '21-1',
  });
