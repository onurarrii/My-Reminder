import moment from 'moment';

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const formatDate = (date: Date) => {
  return moment(date).format('DD MMM YYYY HH:MM');
};
