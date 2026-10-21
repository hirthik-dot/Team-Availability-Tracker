import type { TeamMember } from '../types/TeamMember';
import { ToggleSwitch } from './ToggleSwitch';
import { formatDate } from '../utils/dateFormatter';

interface TeamRowProps {
  member: TeamMember;
  onStatusChange: (id: number, available: boolean) => void;
  onDelete: (id: number, name: string) => void;
}

export const TeamRow = ({ member, onStatusChange, onDelete }: TeamRowProps) => {
  return (
    <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4 text-gray-900 dark:text-white">{member.name}</td>
      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{member.role}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          member.available
            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
            : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
        }`}>
          {member.available ? 'Available' : 'Busy'}
        </span>
      </td>
      <td className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm">
        {formatDate(member.updated_at)}
      </td>
      <td className="px-6 py-4 flex gap-2">
        <ToggleSwitch
          checked={member.available}
          onChange={(checked) => onStatusChange(member.id, checked)}
        />
        <button
          onClick={() => onDelete(member.id, member.name)}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
