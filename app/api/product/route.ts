import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const name: string = body.name;
    const type: string = body.type;
    const price: number = body.price;
    const size: number = body.size;
    const description: string = body.description;
    const availability: boolean = body.availability;
    const serialNum: number = body.serialNum;
    const material: string = body.material;

    const newEntry = await prisma.product.create({
      data: {
        "name": name,
        "type": type,
        "price": price,
        "size": size,
        "description": description,
        "availability": availability,
        "serialNum": serialNum,
        "material": material,
      },
    });

    return NextResponse.json({ newEntry }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating a new product" },
      { status: 500 }
    );
  }
}

/*
{
  "name": "testName",
  "type": "face",
  "price": 100,
  "size": 20,
  "description": "Lorem impsum",
  "availability": false,
  "serialNum": 12345,
  "material": "testMaterial"
}
*/