import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db';
import { LightningProduct } from '@/app/server/models/LightningProducts';

export async function GET() {
  await connectDB();

  const lightningProducts = await LightningProduct.find();
  return NextResponse.json(lightningProducts);
}
