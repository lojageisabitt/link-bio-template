import { NextRequest, NextResponse } from "next/server";

const DATA_SOURCE_URL = 'https://api.mercadopago.com/v1/payments/';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN_TEST_MERCADOPAGO;

export async function GET(idPayment:NextRequest) {
  const id = idPayment;
  const paymentUrl = `${DATA_SOURCE_URL}${id}`
  const res = await fetch(paymentUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
  });

  const uniquePayment = await res.json();
  
  
  console.log(uniquePayment);
  return NextResponse.redirect(new URL('/portal/user', idPayment.url))
  //return NextResponse.json(uniquePayment);
}

