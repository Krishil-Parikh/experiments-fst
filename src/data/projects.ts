// src/data/projects.ts
import { v4 as uuidv4 } from 'uuid';

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  createdAt: string;
};

let projects: Project[] = [
  {
    id: uuidv4(),
    title: "TaskFlow",
    description: "Modern project management app",
    tech: ["Next.js", "Supabase", "Tailwind"],
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: "MovieMood",
    description: "Mood-based movie recommender",
    tech: ["React", "TMDB API", "Framer Motion"],
    createdAt: new Date().toISOString(),
  },
];

// Helper to get fresh copy (avoid mutation issues)
export const getProjects = () => [...projects];
export const addProject = (newProject: Omit<Project, 'id' | 'createdAt'>) => {
  const project: Project = {
    ...newProject,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };
  projects.push(project);
  return project;
};

export const updateProject = (id: string, updates: Partial<Omit<Project, 'id' | 'createdAt'>>) => {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updates };
  return projects[index];
};

export const deleteProject = (id: string) => {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return false;
  projects.splice(index, 1);
  return true;
};