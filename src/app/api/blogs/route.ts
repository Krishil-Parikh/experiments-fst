// src/app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongoose';
import BlogPost from '@/models/BlogPost';

export async function GET() {
  try {
    await dbConnect();
    const posts = await BlogPost.find({}).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const post = await BlogPost.create(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}