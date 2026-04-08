// calendarUtils.js
// Generates the array of day cells for a given month/year
// Week starts on Sunday (day index 0)

// Each cell in the grid is either:
//   { type: 'empty' }  — a blank filler before the first day
//   { type: 'day', date: Date, dayNumber: number } — an actual day

export function generateCalendarCells(year, month) {
  const cells = [];

  // Find the day of week for the 1st of this month (0=Sun, 6=Sat)
  const firstDay = new Date(year, month, 1).getDay();

  // Total days in this month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add leading empty cells so day 1 lands on the correct column
  for (let i = 0; i < firstDay; i++) {
    cells.push({ type: 'empty', id: `empty-start-${i}` });
  }

  // Add a cell for each day in the month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      type: 'day',
      date: new Date(year, month, d),
      dayNumber: d,
      id: `day-${year}-${month}-${d}`,
    });
  }

  // Optional: pad trailing empty cells to complete the last row (7 columns)
  // This gives the grid a uniform look
  const totalCells = cells.length;
  const remainder = totalCells % 7;
  if (remainder !== 0) {
    const trailingEmpties = 7 - remainder;
    for (let i = 0; i < trailingEmpties; i++) {
      cells.push({ type: 'empty', id: `empty-end-${i}` });
    }
  }

  return cells;
}
