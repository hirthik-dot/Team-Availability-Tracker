# Team Availability Tracker - Project Summary

## Project Overview

The **Team Availability Tracker** is a full-stack web application designed to help teams manage and track member availability status in real-time. It provides an intuitive dashboard for viewing team statistics, searching for members, filtering by availability status, and managing team member information.

## Architecture

### Frontend (React + TypeScript + TailwindCSS)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS for responsive design
- **HTTP Client**: Axios for API communication
- **State Management**: React hooks (useState, useEffect)
- **Custom Hooks**: useTeam (for data fetching), useDarkMode (for theme management)

### Backend (Flask + SQLAlchemy)
- **Framework**: Flask
- **Database**: SQLite with SQLAlchemy ORM
- **CORS**: Flask-CORS for cross-origin requests
- **API**: RESTful endpoints for CRUD operations

### Database Schema
```sql
CREATE TABLE team_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP,
  created_at TIMESTAMP
);
```

## Key Features

### 1. Real-time Availability Tracking
- Toggle team member status between Available and Busy
- Instant UI updates with success/error notifications
- Automatic timestamp updates

### 2. Dashboard Statistics
- **Total Members**: Count of all team members
- **Available**: Count of available members
- **Busy**: Count of busy members
- **Availability %**: Percentage of available team members

### 3. Search Functionality
- Real-time search by member name or role
- Instant filtering as user types
- Case-insensitive matching

### 4. Filter Options
- Filter by all members
- Filter by available members only
- Filter by busy members only

### 5. Team Management
- Add new team members with name, role, and availability status
- Delete team members with confirmation dialog
- View member details including last update timestamp

### 6. Dark Mode Support
- Toggle between light and dark themes
- Persistent theme preference using localStorage
- Smooth theme transitions

### 7. Responsive Design
- Mobile-friendly interface
- Grid-based layout with TailwindCSS
- Optimized for all screen sizes

## Component Structure

### Frontend Components
- **Header**: Displays title, current date, and user info
- **Navbar**: Navigation menu
- **StatsCard**: Reusable statistics display card
- **SearchBar**: Real-time search input
- **FilterDropdown**: Status filter selector
- **TeamTable**: Main table displaying team members
- **TeamRow**: Individual team member row
- **ToggleSwitch**: Availability status toggle
- **AddMemberModal**: Form for adding new members
- **DeleteConfirmation**: Confirmation dialog for deletion
- **DarkModeToggle**: Theme switcher button
- **Loader**: Loading spinner
- **EmptyState**: Empty state message
- **ToastNotification**: Success/error notifications

### Custom Hooks
- **useTeam**: Manages team data, statistics, and API interactions
- **useDarkMode**: Manages dark mode state with localStorage

### Utility Functions
- **dateFormatter**: Formats timestamps to readable format
- **calculations**: Calculates availability percentage

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/team` | Fetch all team members |
| POST | `/api/team` | Add a new team member |
| PUT | `/api/team/<id>` | Update a team member |
| DELETE | `/api/team/<id>` | Delete a team member |
| GET | `/api/stats` | Get team statistics |

## Sample Data

The database is automatically seeded with 5 team members:

1. **Alex Rivers** - Senior Developer (Available)
2. **Samantha Chen** - Product Designer (Busy)
3. **Jordan Taylor** - Backend Engineer (Available)
4. **Maria Garcia** - QA Specialist (Available)
5. **Liam Wilson** - Frontend Developer (Busy)

## Project Structure

```
team-availability-tracker/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterDropdown.tsx
│   │   │   ├── TeamTable.tsx
│   │   │   ├── TeamRow.tsx
│   │   │   ├── ToggleSwitch.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── ToastNotification.tsx
│   │   │   ├── AddMemberModal.tsx
│   │   │   ├── DeleteConfirmation.tsx
│   │   │   └── DarkModeToggle.tsx
│   │   ├── pages/
│   │   │   └── Dashboard.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── hooks/
│   │   │   ├── useTeam.ts
│   │   │   └── useDarkMode.ts
│   │   ├── types/
│   │   │   ├── TeamMember.ts
│   │   │   └── Stats.ts
│   │   ├── utils/
│   │   │   ├── dateFormatter.ts
│   │   │   └── calculations.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   │   └── favicon.svg
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
│
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   ├── database.py
│   ├── config.py
│   ├── seed.py
│   ├── requirements.txt
│   ├── .env
│   └── instance/
│       └── team.db
│
├── README.md
├── TEST_INSTRUCTIONS.md
└── PROJECT_SUMMARY.md
```

## Getting Started

### Prerequisites
- Node.js v16+ and npm
- Python 3.8+

### Installation

**Backend Setup:**
```bash
cd backend
pip install -r requirements.txt
python seed.py
python app.py
```

**Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

### Access the Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api`

## Development Workflow

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Development
```bash
cd backend
python app.py    # Start Flask server in debug mode
```

## Key Technologies

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| TypeScript | Type-safe JavaScript |
| Vite | Fast build tool |
| TailwindCSS | Utility-first CSS |
| Axios | HTTP client |
| Flask | Backend framework |
| SQLAlchemy | ORM |
| SQLite | Database |

## Features Implemented

✅ Real-time availability toggling
✅ Search by name and role
✅ Filter by availability status
✅ Add new team members
✅ Delete team members
✅ View team statistics
✅ Dark mode support
✅ Responsive design
✅ Toast notifications
✅ Loading states
✅ Error handling
✅ Empty state messaging
✅ Confirmation dialogs
✅ Timestamp formatting
✅ localStorage persistence

## Performance Considerations

- **Frontend**: Optimized with Vite for fast development and production builds
- **Backend**: Lightweight Flask server with efficient SQLAlchemy queries
- **Database**: SQLite suitable for small to medium teams
- **Caching**: localStorage for theme preference
- **API**: Minimal payload with JSON responses

## Security Features

- CORS enabled for safe cross-origin requests
- Type-safe TypeScript for frontend
- SQLAlchemy ORM prevents SQL injection
- Input validation on forms
- Proper error handling and logging

## Future Enhancements

- User authentication and authorization
- Team management (create/edit teams)
- Availability history and analytics
- Scheduled availability (time-based)
- Email notifications
- API rate limiting
- Database backups
- Admin dashboard
- Export functionality (CSV, PDF)
- Real-time updates with WebSockets

## Deployment Options

### Frontend
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Backend
- Heroku
- AWS EC2
- DigitalOcean
- Railway
- Render

### Database
- AWS RDS (PostgreSQL)
- MongoDB Atlas
- Firebase Firestore

## Testing

The application has been tested for:
- ✅ Component rendering
- ✅ API integration
- ✅ State management
- ✅ Form validation
- ✅ Error handling
- ✅ Responsive design
- ✅ Dark mode functionality
- ✅ Search and filter operations

## Troubleshooting

### Common Issues

1. **API Connection Failed**
   - Ensure backend is running on port 5000
   - Check CORS configuration
   - Verify API URL in frontend config

2. **Database Errors**
   - Delete `backend/instance/team.db` to reseed
   - Ensure `backend/instance/` directory exists
   - Check file permissions

3. **Styling Issues**
   - Run `npm install` to ensure all dependencies
   - Clear browser cache
   - Rebuild frontend with `npm run build`

## Support and Documentation

- See `README.md` for detailed project documentation
- See `TEST_INSTRUCTIONS.md` for testing guidelines
- Check component files for inline documentation

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

Created as a full-stack web application demonstrating modern React and Flask development practices.
