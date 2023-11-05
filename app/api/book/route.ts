import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const title: string = body.booktitle;
    const author: string = body.bookAuthor;
    const genre: string = body.bookGenre;

    const newEntry = await prisma.bookSuggestion.create({
      data: {
        booktitle: title,
        bookAuthor: author,
        bookGenre: genre,
      },
    });

    return NextResponse.json({ message: "Hi!", newEntry }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating suggestion" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allBooks = await prisma.bookSuggestion.findMany();
    return NextResponse.json({ allBooks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error get all books" }, { status: 500 });
  }
}

