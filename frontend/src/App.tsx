import { Dashboard } from './pages/Dashboard';
import { DarkModeToggle } from './components/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      <Dashboard />
    </div>
  );
}

export default App;
