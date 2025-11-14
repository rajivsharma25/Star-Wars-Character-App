// Formats a date string to 'dd-MM-yyyy'
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB'); // e.g., 31/12/2025
}
export default formatDate;
