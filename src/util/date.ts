export const getLastYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear - 1;
}