// src/lib/api/projects.ts
const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  return ''; // in production Vercel/Netlify will handle relative paths correctly
};

const API_BASE = `${getBaseUrl()}/api/projects`;

export async function getAllProjects() {
  try {
    const res = await fetch(API_BASE, {
      cache: 'no-store',           // always fresh data
      next: { tags: ['projects'] }, // optional: for future revalidation
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // graceful fallback → empty array
  }
}