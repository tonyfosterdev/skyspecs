import moment from 'moment';

export function formatDate(dateString) {
  return moment(dateString).format('MMMM Do YYYY, h:mm:ss a');
}