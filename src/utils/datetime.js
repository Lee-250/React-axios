import moment from 'moment';

const display_date_to_user = (start_time) => {
  const start_time_to_user = moment(start_time).format("dddd Do MMM HH:mm");
  const end_time = moment(start_time).add(1, "hour");
  const end_time_to_user = moment(end_time).format("HH:mm");
  return `${start_time_to_user}-${end_time_to_user}`;
}

export { display_date_to_user };
