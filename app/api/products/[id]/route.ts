import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Product } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (
    request: Request,
    { params }: { params: { id: string } }
) => {  
    const product = await prisma.product.delete({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json(product, { status: 200 });
};
