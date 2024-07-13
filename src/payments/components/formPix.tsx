import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PaymentActions from "../actions/paymentActions"

export async function FormPaymentPix() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Retiro 2024</CardTitle>
        <CardDescription>Descendo do Salto</CardDescription>
      </CardHeader>
        <form action={PaymentActions.createPaymentPix}>
        <CardContent>
            <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Investimento R$250,00</Label>
                    <Input name='transaction_amount' id="transaction_amount" type="hidden" value={250} required />
                    <Input name='description' id="description" type="hidden" value="Retiro 2024: Descendo do salto" required />
                    <Input name='payment_method_id' id="payment_method_id" type="hidden" value="pix" required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nome</Label>
                    <Input name='name' id="name" type="text" placeholder="Digite seu nome" required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input name='phone' id="telefone" type="text" placeholder="(21)98999-9999" required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">E-mail</Label>
                    <Input name='email' id="email" type="text" placeholder="exemplo@email.com" required />
                    </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button type="submit">Pagar</Button>
        </CardFooter>
        </form>
    </Card>
  )
}
