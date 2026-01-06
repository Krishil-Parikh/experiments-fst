// src/app/api/projects/[id]/route.ts
import { NextResponse } from 'next/server';
import { getProjects, updateProject, deleteProject } from '@/data/projects';

// Type for context (recommended)
type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;   // destructuring after await

  const projects = getProjects();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}

export async function PUT(request: Request, context: Context) {
  const params = await context.params;
  const id = params.id;

  try {
    const body = await request.json();
    const updated = updateProject(id, body);

    if (!updated) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, context: Context) {
  const params = await context.params;
  const id = params.id;

  const deleted = deleteProject(id);

  if (!deleted) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return new NextResponse(null, { status: 204 });
}