import { useState, useEffect } from 'react';
import type { TeamMember } from '../types/TeamMember';
import type { Stats } from '../types/Stats';
import { teamAPI } from '../services/api';

export const useTeam = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, available: 0, busy: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTeam = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await teamAPI.getTeam();
      setTeam(data);
      
      const statsData = await teamAPI.getStats();
      setStats(statsData);
    } catch (err) {
      setError('Failed to fetch team data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, available: boolean) => {
    try {
      const updated = await teamAPI.updateMember(id, { available });
      setTeam(team.map(m => m.id === id ? updated : m));
      
      const statsData = await teamAPI.getStats();
      setStats(statsData);
    } catch (err) {
      setError('Failed to update status');
      console.error(err);
    }
  };

  const addMember = async (member: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const newMember = await teamAPI.addMember(member);
      setTeam([...team, newMember]);
      
      const statsData = await teamAPI.getStats();
      setStats(statsData);
    } catch (err) {
      setError('Failed to add member');
      console.error(err);
    }
  };

  const deleteMember = async (id: number) => {
    try {
      await teamAPI.deleteMember(id);
      setTeam(team.filter(m => m.id !== id));
      
      const statsData = await teamAPI.getStats();
      setStats(statsData);
    } catch (err) {
      setError('Failed to delete member');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return {
    team,
    stats,
    loading,
    error,
    fetchTeam,
    updateStatus,
    addMember,
    deleteMember,
  };
};
