# Team Availability Tracker - Testing Instructions

## Overview

The Team Availability Tracker is a full-stack application for managing team member availability status. It consists of:

- **Backend**: Flask API server running on port 5000
- **Frontend**: React/TypeScript/TailwindCSS application running on port 5173

## Local Testing (Recommended)

Since the application is designed to run locally, follow these steps to test it:

### 1. Start the Backend Server

```bash
cd backend
python3 app.py
```

The backend will start on `http://localhost:5000` and automatically:
- Create the SQLite database at `backend/instance/team.db`
- Initialize the database schema
- Load sample team member data

### 2. Start the Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

### 3. Open the Application

Navigate to `http://localhost:5173` in your browser. You should see:

- **Header**: Team Availability Tracker title with current date and user info
- **Navigation**: Dashboard, Team, Reports, Settings links
- **Statistics Cards**: Total Members (5), Available, Busy, Availability %
- **Search Bar**: Search by name or role
- **Filter Dropdown**: Filter by All, Available, or Busy
- **Team Table**: List of all team members with their status, last updated time, and action buttons
- **Dark Mode Toggle**: Moon icon in top-right corner to switch themes

## Features to Test

### 1. View Team Members
- The table should display 5 sample team members:
  - Alex Rivers (Senior Developer) - Available
  - Samantha Chen (Product Designer) - Busy
  - Jordan Taylor (Backend Engineer) - Available
  - Maria Garcia (QA Specialist) - Available
  - Liam Wilson (Frontend Developer) - Busy

### 2. Toggle Availability Status
- Click the toggle switch next to any team member to change their status
- The status should update immediately in the table
- A success toast notification should appear
- Statistics should update automatically

### 3. Search Functionality
- Type in the search bar to filter by name or role
- Results update in real-time as you type
- Example: Type "Developer" to see developers

### 4. Filter by Status
- Use the dropdown to filter by:
  - **All**: Show all team members
  - **Available**: Show only available members
  - **Busy**: Show only busy members

### 5. Add New Member
- Click the "+ Add Member" button
- Fill in the form with:
  - Name
  - Role
  - Availability (checkbox)
- Click "Add Member"
- The new member should appear in the table
- Statistics should update

### 6. Delete Member
- Click the "Delete" button next to any team member
- Confirm the deletion in the popup
- The member should be removed from the table
- Statistics should update

### 7. Dark Mode
- Click the moon icon (🌙) in the top-right corner
- The interface should switch to dark mode
- Click again to switch back to light mode
- The preference is saved in localStorage and persists across page reloads

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/team` - Fetch all team members
- `POST /api/team` - Add a new team member
- `PUT /api/team/<id>` - Update a team member
- `DELETE /api/team/<id>` - Delete a team member
- `GET /api/stats` - Get team statistics

## Sample Data

The database is automatically seeded with 5 team members on first run:

1. **Alex Rivers** - Senior Developer (Available)
2. **Samantha Chen** - Product Designer (Busy)
3. **Jordan Taylor** - Backend Engineer (Available)
4. **Maria Garcia** - QA Specialist (Available)
5. **Liam Wilson** - Frontend Developer (Busy)

## Troubleshooting

### Frontend shows "Failed to fetch team data"
- Ensure the backend server is running on port 5000
- Check that the API URL in `frontend/src/services/api.ts` is correct
- Verify CORS is enabled in the Flask app

### Database errors
- Delete `backend/instance/team.db` and restart the backend to reseed the database
- Ensure the `backend/instance/` directory exists and is writable

### Styling issues
- Ensure TailwindCSS is properly installed: `npm install` in the frontend directory
- Clear browser cache and reload the page

## Production Build

To build the frontend for production:

```bash
cd frontend
npm run build
```

The optimized build will be in the `frontend/dist/` directory.

## Project Structure

```
team-availability-tracker/
├── backend/
│   ├── app.py              # Flask application entry point
│   ├── models.py           # Database models
│   ├── routes.py           # API endpoints
│   ├── database.py         # Database initialization
│   ├── config.py           # Configuration
│   ├── seed.py             # Database seeding
│   ├── requirements.txt    # Python dependencies
│   └── instance/
│       └── team.db         # SQLite database
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service layer
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main App component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles with Tailwind
│   ├── package.json        # Node dependencies
│   ├── vite.config.ts      # Vite configuration
│   ├── tailwind.config.js  # Tailwind configuration
│   └── tsconfig.json       # TypeScript configuration
│
└── README.md               # Project documentation
```

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite, TailwindCSS, Axios
- **Backend**: Flask, Flask-CORS, Flask-SQLAlchemy, SQLite
- **Database**: SQLite with SQLAlchemy ORM

## Notes

- The application uses localStorage to persist dark mode preference
- All API calls are made via Axios with proper error handling
- The database is automatically created and seeded on first run
- CORS is enabled to allow cross-origin requests from the frontend
