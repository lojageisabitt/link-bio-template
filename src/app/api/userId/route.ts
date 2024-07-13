import AuthService from "@/auth/service/authService";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const id = await AuthService.getUserId();

    if (id) {
        const user = await prisma.users.findFirst({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                type: true,
            }
        });
    }
    return NextResponse.redirect(new URL('/portal/user', req.url))
}