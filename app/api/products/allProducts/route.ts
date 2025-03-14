import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db';
import { Product } from '@/app/server/models/Products';

export async function GET() {
  await connectDB();

  const products = await Product.find();
  return NextResponse.json(products);
}
