import { formatDate } from '../utils/dateFormatter';

export const Header = () => {
  const currentDate = new Date().toISOString();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-6 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Team Availability Tracker
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {formatDate(currentDate)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 dark:text-gray-400">User Info</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">Admin</p>
        </div>
      </div>
    </header>
  );
};
