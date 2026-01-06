// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { getProjects, addProject } from '@/data/projects';

export async function GET() {
  return NextResponse.json(getProjects());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.title || !body.description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const newProject = addProject(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}