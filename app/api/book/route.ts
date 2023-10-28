import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const title: string = body.booktitle;
    const author: string = body.bookAuthor;
    const genre: string = body.bookGenre;
    console.log(title, author, genre);

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
