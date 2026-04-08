// Hero images for each month
// Using high-quality Unsplash or google images with nature/seasonal themes
// Each entry has a URL, a descriptive alt text, and a suggested accent color

const heroImages = [
  {
    month: 0, // January
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    alt: 'Snowy mountain peak under starry sky',
    accentColor: '#1565C0', // deep blue
  },
  {
    month: 1, // February
    url: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&q=80',
    alt: 'Misty forest in winter',
    accentColor: '#6A1B9A', // purple
  },
  {
    month: 2, // March
    url: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80',
    alt: 'Cherry blossoms in spring',
    accentColor: '#AD1457', // pink
  },
  {
    month: 3, // April
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',
    alt: 'Green meadow with flowers',
    accentColor: '#2E7D32', // green
  },
  {
    month: 4, // May
    url: 'https://media.istockphoto.com/id/182027571/photo/backlight-view-through-apple-tree-summer-meadow-in-bavaria-germany.jpg?s=612x612&w=0&k=20&c=x0WMRiJz2RX87SHN2A4JobozSgiHM9LTKazi92NyNRo=',
    alt: 'Colorful tulip field',
    accentColor: '#E65100', // orange
  },
  {
    month: 5, // June
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Golden sunset over tropical beach',
    accentColor: '#F57F17', // amber
  },
  {
    month: 6, // July
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    alt: 'Aerial view of green mountains',
    accentColor: '#1B5E20', // dark green
  },
  {
    month: 7, // August
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
    alt: 'Field of orange wildflowers',
    accentColor: '#BF360C', // deep orange
  },
  {
    month: 8, // September
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
    alt: 'Autumn forest trail',
    accentColor: '#E65100', // burnt orange
  },
  {
    month: 9, // October
    url: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
    alt: 'Fall leaves on ground',
    accentColor: '#4E342E', // brown
  },
  {
    month: 10, // November
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
    alt: 'Foggy lake in autumn',
    accentColor: '#37474F', // blue-grey
  },
  {
    month: 11, // December
    url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80',
    alt: 'Snow covered pine trees',
    accentColor: '#0277BD', // light blue
  },
];

// Helper to get hero data for a given month index (0-11)
export function getHeroForMonth(monthIndex) {
  return heroImages[monthIndex] || heroImages[0];
}

export default heroImages;
