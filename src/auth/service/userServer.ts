import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUserInfo(id:string) {
    'use server'

    if (!id){
        NextResponse.json({ message: 'Dados do usuário não encontrado.' }, { status: 404 });
    }
    const user = await prisma.users.findFirst({
        where: { id },
        select: {
            id: true,
            name: true,
            type: true,
            image:true
        }
    });
    return user
    
  }
async function getUserpaymentInfo(userId:string) {
    'use server'

    if (!userId){
        NextResponse.json({ message: 'Dados do usuário não encontrado.' }, { status: 404 });
    }
    const payment = await prisma.paymentUser.findMany({
        where: { userId },
        select: {
            paymentId: true
        }
    });
    console.log('<<<<<<<<<<SERVER USER PAYMENT>>>>>>>>>>', payment);

    return payment

}

const ServiceUser = {
    getUserInfo,
    getUserpaymentInfo
}

export default ServiceUser