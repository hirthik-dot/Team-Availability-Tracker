export const Navbar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-700 p-4 mb-6">
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            Team
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            Reports
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
