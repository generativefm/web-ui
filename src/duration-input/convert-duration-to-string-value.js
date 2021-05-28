const padNumber = (number) => `${number > 9 ? '' : '0'}${number}`;

const convertDurationToStringValue = (duration) => {
  if (typeof duration !== 'number' || duration < 1000) {
    return '';
  }
  const hours = Math.min(Math.floor(duration / (60 * 60 * 1000)), 99);
  const minutes = Math.min(
    Math.floor((duration - hours * 60 * 60 * 1000) / (60 * 1000)),
    59
  );
  const seconds = Math.min(
    Math.floor(
      (duration - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000
    ),
    59
  );
  if (hours > 0) {
    return `${hours}${padNumber(minutes)}${padNumber(seconds)}`;
  } else if (minutes > 0) {
    return `${minutes}${padNumber(seconds)}`;
  }
  return `${seconds}`;
};

export default convertDurationToStringValue;
