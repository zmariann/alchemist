import { signJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    //user.password === body.username
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      //Spread syntax can be used when all elements from an object or array need to be included in a new array or object
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
