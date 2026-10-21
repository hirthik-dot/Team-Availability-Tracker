import { useState } from 'react';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { StatsCard } from '../components/StatsCard';
import { SearchBar } from '../components/SearchBar';
import { FilterDropdown } from '../components/FilterDropdown';
import { TeamTable } from '../components/TeamTable';
import { Loader } from '../components/Loader';
import { EmptyState } from '../components/EmptyState';
import { ToastNotification } from '../components/ToastNotification';
import { AddMemberModal } from '../components/AddMemberModal';
import { DeleteConfirmation } from '../components/DeleteConfirmation';
import { useTeam } from '../hooks/useTeam';
import { calculateAvailabilityPercentage } from '../utils/calculations';
import type { TeamMember } from '../types/TeamMember';

export const Dashboard = () => {
  const { team, stats, loading, error, updateStatus, addMember, deleteMember } = useTeam();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; id: number; name: string }>({
    isOpen: false,
    id: 0,
    name: '',
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const filteredTeam = team.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === '' ||
      (filterStatus === 'available' && member.available) ||
      (filterStatus === 'busy' && !member.available);

    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = async (id: number, available: boolean) => {
    try {
      await updateStatus(id, available);
      setToast({
        message: 'Availability Updated Successfully',
        type: 'success',
      });
    } catch {
      setToast({
        message: 'Failed To Update Status',
        type: 'error',
      });
    }
  };

  const handleAddMember = async (member: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      await addMember(member);
      setToast({
        message: 'Member Added Successfully',
        type: 'success',
      });
    } catch {
      setToast({
        message: 'Failed To Add Member',
        type: 'error',
      });
    }
  };

  const handleDeleteMember = async () => {
    try {
      await deleteMember(deleteConfirm.id);
      setToast({
        message: 'Member Deleted Successfully',
        type: 'success',
      });
      setDeleteConfirm({ isOpen: false, id: 0, name: '' });
    } catch {
      setToast({
        message: 'Failed To Delete Member',
        type: 'error',
      });
    }
  };

  const availabilityPercentage = calculateAvailabilityPercentage(stats.available, stats.total);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Navbar />

      <main className="px-6 pb-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <StatsCard title="Total Members" value={stats.total} color="blue" />
          <StatsCard title="Available" value={stats.available} color="green" />
          <StatsCard title="Busy" value={stats.busy} color="red" />
          <StatsCard title="Availability %" value={`${availabilityPercentage}%`} color="purple" />
        </div>

        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          <div>
            <FilterDropdown onFilter={setFilterStatus} />
          </div>
        </div>

        {/* Add Member Button */}
        <div className="mb-6">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            + Add Member
          </button>
        </div>

        {/* Team Table Section */}
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : filteredTeam.length === 0 ? (
          <EmptyState />
        ) : (
          <TeamTable
            members={filteredTeam}
            onStatusChange={handleStatusChange}
            onDelete={(id, name) => setDeleteConfirm({ isOpen: true, id, name })}
          />
        )}
      </main>

      {/* Modals and Notifications */}
      <AddMemberModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddMember}
      />

      <DeleteConfirmation
        isOpen={deleteConfirm.isOpen}
        memberName={deleteConfirm.name}
        onConfirm={handleDeleteMember}
        onCancel={() => setDeleteConfirm({ isOpen: false, id: 0, name: '' })}
      />

      {toast && (
        <ToastNotification
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};
