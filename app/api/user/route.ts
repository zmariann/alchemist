import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}

/*
export async function GET() {
    try {
      const users = await prisma.user.findMany();
      return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Error get all users" }, { status: 500 });
    }
  }
*/