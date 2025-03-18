import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db';
import { ClearanceProduct } from '@/app/server/models/ClearanceProducts';

export async function GET() {
  await connectDB();

  const clearanceProducts = await ClearanceProduct.find();
  return NextResponse.json(clearanceProducts);
}
