"use client"
import QRCode from 'qrcode.react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import Link from "next/link"
import { useState } from 'react';
import { Input } from '@/components/ui/input';
export async function PageQrCodePix( {detail} : UserPaymentDetails ){
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
    return(
        <>
        <div>
        <Card className="box-border w-min-[350px] w-[650px] whitespace-normal overflow-auto">
        <CardHeader>
          <CardTitle>Pix gerado com sucesso</CardTitle>
          <CardDescription>Realize o pagamento para concluir sua inscrição</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
            <p>Id da compra: {detail.id}</p>
            <p>Descrição: {detail.description}</p>
            {/* <p>Investimento: {detail.tra}</p> */}
            <p>Tipo de pagamento: {detail.payment_method_id}</p>
            <p>Status: {detail.status}</p>
            <p>Código de pagamento:
              <div className="flex items-center">
              <Input className="rounded-r-none focus:outline-none" readOnly value={detail.qr_code!}/>
              <CopyToClipboard text={detail.qr_code!} onCopy={handleCopy}>
              <Button className="rounded-l-none">
                  <FaCopy />Copiar
                </Button>
              </CopyToClipboard>
              {copied && <span style={{ color: 'green' }}>Copiado</span>}
              </div>
            </p>

            {/* <Image src={detail.qr_code_base64!} width={300} height={300} alt={"QrCode"}/> */}
              <div className="flex flex-col items-center p-4">
                <QRCode value={detail.qr_code!} size={300} />
              </div>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button><Link href={detail.ticket_url!}>Link Mercado pago</Link></Button>
        </CardFooter>

    </Card>
        </div>
        </>
    )
}