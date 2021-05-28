const convertStringValueToDuration = (value) => {
  if (typeof value !== 'string') {
    return null;
  }
  const seconds = Number.parseInt(value.substring(value.length - 2));
  const minutes = Number.parseInt(
    value.substring(value.length - 4, value.length - 2)
  );
  const hours = Number.parseInt(
    value.substring(value.length - 6, value.length - 4)
  );
  let duration = 0;
  if (!Number.isNaN(hours)) {
    duration += hours * 60 * 60 * 1000;
  }
  if (!Number.isNaN(minutes)) {
    duration += minutes * 60 * 1000;
  }
  if (!Number.isNaN(seconds)) {
    duration += seconds * 1000;
    return duration;
  }
  return null;
};

export default convertStringValueToDuration;
