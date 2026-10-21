# Team Availability Tracker

A full-stack application for tracking team member availability status in real-time. Built with React, TypeScript, TailwindCSS on the frontend and Flask, SQLAlchemy on the backend.

## Features

- **Real-time Availability Tracking**: Toggle team members between Available and Busy status
- **Search & Filter**: Search by name or role, filter by availability status
- **Statistics Dashboard**: View total members, available count, busy count, and availability percentage
- **Add/Delete Members**: Manage team members with a modal interface
- **Dark Mode Support**: Toggle between light and dark themes with localStorage persistence
- **Responsive Design**: Mobile-friendly interface built with TailwindCSS
- **Toast Notifications**: Success and error feedback for user actions

## Project Structure

```
team-availability-tracker/
├── frontend/                    # React TypeScript application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components (Dashboard)
│   │   ├── services/           # API service layer
│   │   ├── hooks/              # Custom React hooks
│   │   ├── types/              # TypeScript type definitions
│   │   ├── utils/              # Utility functions
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── backend/                     # Flask API server
│   ├── app.py                  # Application entry point
│   ├── models.py               # Database models
│   ├── routes.py               # API endpoints
│   ├── database.py             # Database initialization
│   ├── config.py               # Configuration settings
│   ├── seed.py                 # Database seeding script
│   ├── requirements.txt        # Python dependencies
│   └── instance/
│       └── team.db             # SQLite database
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Seed the database with sample data:
```bash
python seed.py
```

4. Start the Flask server:
```bash
python app.py
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Team Members
- `GET /api/team` - Fetch all team members
- `POST /api/team` - Add a new team member
- `PUT /api/team/<id>` - Update a team member
- `DELETE /api/team/<id>` - Delete a team member

### Statistics
- `GET /api/stats` - Get team statistics (total, available, busy)

## Database Schema

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

## Frontend Components

- **Header**: Displays title, current date, and user info
- **Navbar**: Navigation menu with Dashboard, Team, Reports, Settings
- **StatsCard**: Reusable card for displaying statistics
- **SearchBar**: Real-time search by name or role
- **FilterDropdown**: Filter members by availability status
- **TeamTable**: Displays team members in a table format
- **TeamRow**: Individual team member row with toggle and delete actions
- **ToggleSwitch**: Toggle availability status
- **AddMemberModal**: Form to add new team members
- **DeleteConfirmation**: Confirmation dialog for deleting members
- **DarkModeToggle**: Switch between light and dark modes
- **Loader**: Loading spinner
- **EmptyState**: Message when no members are found
- **ToastNotification**: Success/error notifications

## Custom Hooks

- **useTeam**: Manages team data, statistics, and API interactions
- **useDarkMode**: Manages dark mode state with localStorage persistence

## Utilities

- **dateFormatter**: Formats timestamps to readable format
- **calculations**: Calculates availability percentage

## Technologies Used

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Axios

### Backend
- Flask
- Flask-CORS
- Flask-SQLAlchemy
- SQLAlchemy
- SQLite

## Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Development
```bash
cd backend
python app.py    # Start Flask server (debug mode)
```

## Sample Data

The database is automatically seeded with the following team members:
- Alex Rivers - Senior Developer
- Samantha Chen - Product Designer
- Jordan Taylor - Backend Engineer
- Maria Garcia - QA Specialist
- Liam Wilson - Frontend Developer

## License

MIT
