export const getCurrentDate = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const getDay5 = () => {
  const currentDate = new Date();

  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 5);

  const futureYear = futureDate.getFullYear();
  const futureMonth = (futureDate.getMonth() + 1).toString().padStart(2, '0');
  const futureDay = futureDate.getDate().toString().padStart(2, '0');

  const formattedFutureDate = `${futureYear}-${futureMonth}-${futureDay}`;

  return formattedFutureDate;
};

export const getDateDashFormat = (dateTime: string) => {
  const fullDate = new Date(parseFloat(dateTime) * 1000);

  const dateDashFormatConverted = `${fullDate.getDate()}-${
    fullDate.getMonth() + 1
  }-${fullDate.getFullYear()}`;

  return dateDashFormatConverted;
};

export const getDayMonthYearFormat = (dateTime: string) => {
  const [year, month, day] = dateTime.split('-');

  const dateObject = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day))
  );

  const formattedYear = dateObject.getUTCFullYear();
  const formattedMonth = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
  const formattedDay = String(dateObject.getUTCDate()).padStart(2, '0');

  const formattedDate = `${formattedDay}-${formattedMonth}-${formattedYear}`;

  return formattedDate;
};

export const getFormatDate = (dateString: string | undefined) => {
  if (!dateString) {
    return '';
  }
  const [day, month, year] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('es-ES', options);

  return formattedDate;
};

export const getDayOfWeek = (dateString: string) => {
  const [day, month, year] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const dayOfWeek = date.toLocaleDateString('es-ES', options);

  const dayCapitalized = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

  return dayCapitalized;
};
