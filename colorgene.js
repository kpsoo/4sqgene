  // Get the current date
  const currentDate = new Date();

  // Get the day, month, and year
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  // Format the date string
  const formattedDate = `${month} ${day}, ${year}`;

  // Update the h2 element with the formatted date
  const h2Element = document.querySelector('.container-date h2');
  h2Element.textContent = formattedDate;
