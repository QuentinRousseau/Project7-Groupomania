export const validMail = (email) => {
  const validMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return validMail.test(email);
};
