// Static mock holiday data (no API needed)
// Format: "MM-DD" so it works for any year
// These are common Indian + global public holidays as a default set

const holidays = {
  '01-01': { name: "New Year's Day", emoji: '🎆' },
  '01-14': { name: 'Makar Sankranti', emoji: '🪁' },
  '01-26': { name: 'Republic Day', emoji: '🇮🇳' },
  '02-14': { name: "Valentine's Day", emoji: '❤️' },
  '03-08': { name: "Women's Day", emoji: '💜' },
  '03-25': { name: 'Holi', emoji: '🎨' },
  '04-14': { name: 'Ambedkar Jayanti', emoji: '🌐' },
  '05-01': { name: 'Labour Day', emoji: '⚒️' },
  '08-15': { name: 'Independence Day', emoji: '🇮🇳' },
  '10-02': { name: 'Gandhi Jayanti', emoji: '🕊️' },
  '10-24': { name: 'Dussehra', emoji: '🏹' },
  '11-01': { name: 'Diwali', emoji: '🪔' },
  '12-25': { name: 'Christmas', emoji: '🎄' },
  '12-31': { name: "New Year's Eve", emoji: '🎉' },
};

// Returns holiday info for a given Date object, or null if not a holiday
export function getHoliday(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const key = `${month}-${day}`;
  return holidays[key] || null;
}

export default holidays;
