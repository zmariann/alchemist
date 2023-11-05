import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
      const users = await prisma.user.findMany();
      return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Error get all users" }, { status: 500 });
    }
  }