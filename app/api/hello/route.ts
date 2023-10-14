import { NextRequest, NextResponse } from "next/server";

/*
export async function GET(request: NextRequest) {
    return new Response('Hello Mariannka')

}
*/

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hi!" });
}
