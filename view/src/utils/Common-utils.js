export const formatDate = (date) => {
  const d = new Date(date);
  let hours = d.getHours();
  const minutes = d.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24hr to 12hr
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
