import { PaymentCreateRequest } from 'mercadopago/dist/clients/payment/create/types';

initMercadoPago(process.env.TOKEN_TEST_MERCADOPAGO_PUBLIC! , { locale: 'pt-BR' });

import { MercadoPagoConfig, Payment } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import  AuthService  from '../../auth/service/authService'
import { initMercadoPago } from '@mercadopago/sdk-react';
import { FieldsCardTokenParams } from '@mercadopago/sdk-react/secureFields/createCardToken/types';
import { MercadoPagoInstance } from '@mercadopago/sdk-react/mercadoPago/initMercadoPago';

const prisma = new PrismaClient();

async function createCardToken(cardTokenParams: FieldsCardTokenParams){
    const instanceMercadoPago = await MercadoPagoInstance.getInstance();
    return instanceMercadoPago?.fields.createCardToken(cardTokenParams);
};

async function createPaymentCard(formData: FormData){
'use server'

        const transaction_amount = formData.get('transaction_amount') as string
        const description = formData.get('description') as string
        const card_number = formData.get('card_number') as string
        const date_expiration =  formData.get('date_expiration') as string
        const security_code = formData.get('security_code') as string
        const card_name = formData.get('card_name') as string
        const doc_number = formData.get('doc_number') as string
        const email = formData.get('email') as string
        const doc_type = formData.get('type') as string;

        console.log(transaction_amount,
            description,
            card_number,
            date_expiration,
            security_code,
            card_name,
            doc_number,
            email,
            doc_type);
        

    // const paymentCreateRequest: PaymentCreateRequest = {
    //     token,
    //     description,
    //     payment_method_id,
    //     transaction_amount,
    //     installments,
    //     payer:{
    //         email,
    //         first_name: name,
    //           "identification": {
    //               "type",
    //               "number",
    //           }
    //     },
    // }
    // const idempotencyKey = uuidv4();
    // const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_TEST_MERCADOPAGO!, options: { timeout: 5000, idempotencyKey: idempotencyKey } });
    // const payment = new Payment(client);

    // const response = await payment.create({ body: paymentCreateRequest });
    // const { id } = response;

    // const userId = String(await AuthService.getUserId());
    // await prisma.paymentUser.create({
    //     data: {
    //         userId,
    //         paymentId: String(id),
    //     },
    // });

    // redirect(`/pagamento/card/sucess/${id}`);

}


const PaymentActionsCard = {
    createPaymentCard,
}



export default PaymentActionsCard

