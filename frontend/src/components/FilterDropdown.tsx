interface FilterDropdownProps {
  onFilter: (filter: string) => void;
}

export const FilterDropdown = ({ onFilter }: FilterDropdownProps) => {
  return (
    <div className="mb-6">
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      >
        <option value="">All</option>
        <option value="available">Available</option>
        <option value="busy">Busy</option>
      </select>
    </div>
  );
};
