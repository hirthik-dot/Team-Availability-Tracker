interface StatsCardProps {
  title: string;
  value: number | string;
  icon?: string;
  color?: string;
}

export const StatsCard = ({ title, value, color = 'blue' }: StatsCardProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
  };

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-6 shadow-md`}>
      <p className="text-sm font-medium opacity-75">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};
