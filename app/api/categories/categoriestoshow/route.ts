import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db';
import Categories from '@/app/server/models/Categories';

export async function GET() {
  await connectDB();

  const categoriesToShow = await Categories.find();
  return NextResponse.json(categoriesToShow);
}
