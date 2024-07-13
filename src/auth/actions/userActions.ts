import AuthService from '../service/authService';
import { NextResponse } from 'next/server';
import ServiceUser from '../service/userServer';


async function userData() {
    'use server';


    const getUserId = await AuthService.getUserId()
    const userId = await getUserId

        if(!userId){
            NextResponse.json({ message: 'Dados do usuário não encontrado.' }, { status: 404 });
            console.log('Usuario não encontrado')
        }

        const getUserData = await ServiceUser.getUserInfo(userId!)

        return getUserData

    }
async function userPaymentData() {
    'use server';


    const getUserId = await AuthService.getUserId()
    const userId = await getUserId

        if(!userId){
            NextResponse.json({ message: 'Dados do usuário não encontrado.' }, { status: 404 });
            console.log('Usuario não encontrado')
        }

        const getUserPaymentData = await ServiceUser.getUserpaymentInfo(userId!)

        return getUserPaymentData

    }

const UserAction = {
    userData,
    userPaymentData
}

export default UserAction