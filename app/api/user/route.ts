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
