import { NextRequest, NextResponse } from "next/server";

// "simple" dynamic request:
// http://localhost:3000/api/hello/anything
//export async function GET(
//  request: NextRequest,
//  { params }: { params: { id: string } }
//) {
//  const id = params.id;
//
//  return NextResponse.json({ message: "Hi!", id });
//}

// query parameter
// http://localhost:3000/api/hello/anything?sort=size
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const {searchParams} = request.nextUrl;
  const sort = searchParams.get("sort");
  console.log("KONZOLka", sort);
  return NextResponse.json({ message: "Hi!", id, sort}, {status: 200});
}

//https://www.youtube.com/watch?v=WlVV_LA4FCg&t=612s
//mutating data 