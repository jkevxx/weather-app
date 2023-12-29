const getCurrentDate = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

const getDay5 = () => {
  const currentDate = new Date();

  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 5);

  const futureYear = futureDate.getFullYear();
  const futureMonth = (futureDate.getMonth() + 1).toString().padStart(2, '0');
  const futureDay = futureDate.getDate().toString().padStart(2, '0');

  const formattedFutureDate = `${futureYear}-${futureMonth}-${futureDay}`;

  return formattedFutureDate;
};

export { getCurrentDate, getDay5 };
