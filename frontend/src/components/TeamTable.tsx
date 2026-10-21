import type { TeamMember } from '../types/TeamMember';
import { TeamRow } from './TeamRow';

interface TeamTableProps {
  members: TeamMember[];
  onStatusChange: (id: number, available: boolean) => void;
  onDelete: (id: number, name: string) => void;
}

export const TeamTable = ({ members, onStatusChange, onDelete }: TeamTableProps) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-gray-900 dark:text-white font-semibold">Employee</th>
            <th className="px-6 py-3 text-left text-gray-900 dark:text-white font-semibold">Role</th>
            <th className="px-6 py-3 text-left text-gray-900 dark:text-white font-semibold">Status</th>
            <th className="px-6 py-3 text-left text-gray-900 dark:text-white font-semibold">Last Updated</th>
            <th className="px-6 py-3 text-left text-gray-900 dark:text-white font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <TeamRow
              key={member.id}
              member={member}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
