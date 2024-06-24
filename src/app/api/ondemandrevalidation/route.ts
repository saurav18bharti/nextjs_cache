
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    revalidateTag('timetag');
    return NextResponse.json({status:"success"})
}