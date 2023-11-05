import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";


interface RequestBody {
  username: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  console.log(body, "hello");

  const user = await prisma.user.findFirst({ 
    where: {
      email: body.username,
    },
  });
console.log(user)

if (user && (await bcrypt.compare(body.password, user.password))) {
  //user.password === body.username
  const { password, ...userWithoutPass } = user;
  return new Response(JSON.stringify(userWithoutPass));
} else return new Response(JSON.stringify(null));

}





