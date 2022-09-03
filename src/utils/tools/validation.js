export const handleChange = (email) => {
  const validMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!validMail.test(email)) {
    return false;
  }
  return true;
};
