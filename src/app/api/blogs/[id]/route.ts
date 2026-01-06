// src/app/api/blogs/[id]/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongoose';
import BlogPost from '@/models/BlogPost';

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await dbConnect();
    const post = await BlogPost.findById(id);
    return post
      ? NextResponse.json(post)
      : NextResponse.json({ error: 'Post not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await dbConnect();
    const body = await request.json();

    const post = await BlogPost.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    return post
      ? NextResponse.json(post)
      : NextResponse.json({ error: 'Post not found' }, { status: 404 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await dbConnect();
    const post = await BlogPost.findByIdAndDelete(id);
    return post
      ? new NextResponse(null, { status: 204 })
      : NextResponse.json({ error: 'Post not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}