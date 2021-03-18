export const isValidEmail = value =>
  value.match(/^[\w+.-]+@\w+\.\w{2,}(?:\.\w{2})?$/i) !== null;

export const isValidName = value => {
  if (value.length < 5) return false;
  if (value.trim().split(' ').length < 2) return false;
  return true;
};
