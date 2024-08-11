export function getDaysDifference(dateString: string): number {
  const [year, month, day] = dateString.split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day); // Note: month is 0-indexed

  const today = new Date();

  parsedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffInTime = Math.abs(today.getTime() - parsedDate.getTime());
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  return diffInDays;
}
