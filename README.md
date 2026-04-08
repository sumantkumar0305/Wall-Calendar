# 🗓️ Wall Calendar — React + Material UI

A beautifully crafted React.js + Material UI web app inspired by physical wall calendars. Features month navigation with seasonal hero images, intuitive click-based date range selection with visual highlights, a notepad section tied to selected ranges with localStorage persistence, holiday markers, weekend styling, and a fully responsive layout that feels like a real hanging wall calendar on both desktop and mobile.

---

## ✨ Features

- **Wall Calendar Aesthetic** — Spiral binding hanger, hero image with diagonal blue shapes, month/year overlay, shadows and layered panels
- **Seasonal Hero Images** — A different landscape photo and accent color for every month of the year
- **Date Range Selection** — Click to set start date, click again to set end date with smooth visual highlights for start, end, and in-between days
- **Notes Panel** — Yellow notepad-style textarea tied to the selected date range, auto-loads saved notes, persists via `localStorage`
- **Month Navigation** — Previous / Next buttons to browse any month, selection preserved across navigation
- **Holiday Markers** — Static Indian + global holiday dots with tooltip names on hover
- **Today Highlight** — Current date always visually distinct in blue
- **Weekend Styling** — Saturday and Sunday displayed in red
- **Range Summary** — Live display of selected start date, end date, and total day count
- **Reset Selection** — One-click button to clear the selected range
- **Fully Responsive** — Side-by-side desktop layout stacks cleanly on mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js 18 | UI framework |
| Material UI (MUI) v5 | Component library and styling |
| Emotion | MUI styling engine |
| localStorage | Notes persistence (no backend) |
| Unsplash | Hero images (no API key needed) |

---

## 📁 Project Structure

```
wall-calendar/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   ├── theme.js                          # MUI theme with blue accent
│   ├── data/
│   │   ├── heroImages.js                 # 12 monthly hero images + accent colors
│   │   └── holidays.js                   # Static holiday map (MM-DD format)
│   ├── utils/
│   │   ├── dateUtils.js                  # Pure date helpers
│   │   ├── calendarUtils.js              # Calendar grid cell generator
│   │   └── storageUtils.js               # localStorage read/write helpers
│   └── components/
│       └── WallCalendar/
│           ├── WallCalendar.jsx          # Main container + all state
│           ├── WallCalendarHeader.jsx    # Footer branding strip
│           ├── CalendarHero.jsx          # Hero image + month/year overlay
│           ├── MonthNavigator.jsx        # Prev/Next month buttons
│           ├── CalendarGrid.jsx          # 7-column calendar grid
│           ├── DayCell.jsx               # Single day cell with all states
│           ├── NotesPanel.jsx            # Notes textarea + save/clear
│           └── RangeSummary.jsx          # Selected range display
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16 or higher
- npm v8 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/wall-calendar.git

# 2. Navigate into the project
cd wall-calendar

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

## 🎮 How to Use

| Action | Behaviour |
|---|---|
| Click a date | Sets the start of your range |
| Click another date after start | Sets the end of your range |
| Click a date before start | Resets start to the new date |
| Click when range is complete | Starts a fresh new selection |
| Click Reset | Clears the entire selection |
| Type in Notes and click Save | Saves note to localStorage for that range |
| Navigate to same range later | Note auto-loads from localStorage |
| Hover over a red dot | Shows holiday name tooltip |

---

## 🎨 Design Decisions

| Decision | Choice & Reason |
|---|---|
| Week start | **Sunday** — matches common calendar conventions |
| Trailing empty cells | **Yes** — pads last row to 7 columns for a uniform grid |
| Selection across months | **Preserved** — navigating months keeps the range in state |
| Note key format | `wcal_notes_YYYY-MM-DD_to_YYYY-MM-DD` |
| Image source | Unsplash (free, public, no API key required) |
| Holiday data | Static `MM-DD` keyed map — Indian + global holidays |

---

## 📸 Screenshots

> Desktop view — hero image top, notes panel left, calendar grid right
> Mobile view — all sections stacked vertically

---

## 🙌 Acknowledgements

- [Material UI](https://mui.com/) for the component library
- [Unsplash](https://unsplash.com/) for the beautiful free hero images
- Design inspired by classic physical wall calendars
