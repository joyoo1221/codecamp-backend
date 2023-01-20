export function getToday() {
  const date = new Date();

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = date.getDate();
  const today = `${yyyy}-${mm}-${dd}`;

  return today;
}
