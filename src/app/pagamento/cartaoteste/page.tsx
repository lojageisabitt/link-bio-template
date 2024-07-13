"use client"
 import { initMercadoPago } from "@mercadopago/sdk-react";
  import { CardPayment } from "@mercadopago/sdk-react";
  export default function FormPaymentCard() {
    
    initMercadoPago(process.env.TOKEN_TEST_MERCADOPAGO_PUBLIC! , { locale: 'pt-BR' });
    return (
      <div className="w-[550px] my-2 mx-auto">
        
          <h1>Pagina de Pagamento Pix</h1>
        
            <p>
            <CardPayment
                initialization={{ amount: 250 }}
                onSubmit={async (param:any) => {
                    console.log(param);
                }}
            />
            </p>
        </div>
    )
  }