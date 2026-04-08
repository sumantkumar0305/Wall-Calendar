// dateUtils.js
// Pure helper functions for working with dates in the calendar

// Full month names
export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Day headers — week starts on SUNDAY (index 0)
// We chose Sunday start to match common calendar conventions
export const DAY_HEADERS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Returns true if two Date objects represent the same calendar day
export function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Returns true if date d is strictly between start and end (exclusive)
export function isBetween(d, start, end) {
  if (!d || !start || !end) return false;
  const t = d.getTime();
  return t > start.getTime() && t < end.getTime();
}

// Returns true if date is today
export function isToday(date) {
  return isSameDay(date, new Date());
}

// Returns true if day is a weekend (Saturday = 6, Sunday = 0)
export function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

// Format a Date as "YYYY-MM-DD" string — used as localStorage key
export function formatDateKey(date) {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Format a Date for display: "Mon, 12 Jan 2026"
export function formatDateDisplay(date) {
  if (!date) return '';
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

// Calculate how many days are in a range (inclusive of both ends)
export function rangeDayCount(start, end) {
  if (!start || !end) return 0;
  const diff = Math.abs(end.getTime() - start.getTime());
  return Math.round(diff / (1000 * 60 * 60 * 24)) + 1;
}

// Returns a new Date set to the first day of the given month/year
export function firstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}

// Returns a new Date set to the last day of the given month/year
export function lastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0);
}

// Navigate to next month from a given year/month
// Returns { year, month } object
export function nextMonth(year, month) {
  if (month === 11) return { year: year + 1, month: 0 };
  return { year, month: month + 1 };
}

// Navigate to previous month
export function prevMonth(year, month) {
  if (month === 0) return { year: year - 1, month: 11 };
  return { year, month: month - 1 };
}
