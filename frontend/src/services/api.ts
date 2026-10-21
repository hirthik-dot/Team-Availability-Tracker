import axios from 'axios';
import type { TeamMember } from '../types/TeamMember';
import type { Stats } from '../types/Stats';

const API_BASE_URL = 'https://5000-i8017s0rube357qt780oa-a4183e46.sg1.manus.computer/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add CORS headers
api.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export const teamAPI = {
  // Fetch all team members
  getTeam: async (): Promise<TeamMember[]> => {
    const response = await api.get<TeamMember[]>('/team');
    return response.data;
  },

  // Add a new team member
  addMember: async (member: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>): Promise<TeamMember> => {
    const response = await api.post<TeamMember>('/team', member);
    return response.data;
  },

  // Update a team member
  updateMember: async (id: number, updates: Partial<TeamMember>): Promise<TeamMember> => {
    const response = await api.put<TeamMember>(`/team/${id}`, updates);
    return response.data;
  },

  // Delete a team member
  deleteMember: async (id: number): Promise<void> => {
    await api.delete(`/team/${id}`);
  },

  // Get statistics
  getStats: async (): Promise<Stats> => {
    const response = await api.get<Stats>('/stats');
    return response.data;
  },
};
