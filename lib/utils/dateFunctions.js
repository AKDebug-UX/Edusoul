/**
 * 
 *
 * @param {string} dateString - The input date string .
 * @returns {string} The H:D date.
 */
export function extractHoursAndMinutes(dateString) {
    const dateObject = new Date(dateString);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    

    return `${hours}:${minutes}`
  
}

/**
 * 
 *
 * @param {string} inputDate - The input date string in 'YYYY-MM-DD' format.
 * @returns {string} The formatted date.
 */
export function formatDate(inputDate) {
    try {
      const dateObj = new Date(inputDate);
      
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      const day = dayNames[dateObj.getDay()];
      const date = dateObj.getDate();
      const month = monthNames[dateObj.getMonth()];
      const year = dateObj.getFullYear();
  
      return `${day}, ${date}, ${month} ${year}`;
    } catch (error) {
      return "Invalid date format";
    }
  }
  

  
  