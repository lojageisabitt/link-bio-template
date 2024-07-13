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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import PaymentActionsCard from "../actions/paymentActionsCard"

export async function FormPaymentCard() {
  return (
    <Card className="min-w-[350px] max-w-[350px] w-[100%]">
      <CardHeader>
        <CardTitle>Retiro 2024</CardTitle>
        <CardDescription>Descendo do Salto. Investimento R$250,00</CardDescription>
      </CardHeader>
        <form action={PaymentActionsCard.createPaymentCard}>
        <CardContent>
            <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                    <Input name='transaction_amount' id="transaction_amount" type="hidden" value={250} required />
                    <Input name='description' id="description" type="hidden" value="Retiro 2024: Descendo do salto" required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="card_number">Número do cartão</Label>
                    <Input name='card_number' id="card_number" type="text" placeholder="1234 1234 1234 1234" required />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="date_expiration">Data de vencimento</Label>
                        <Input name='date_expiration' id="date_expiration" type="text" placeholder="mm/aa" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="security_code">Código de segurança</Label>
                        <Input name='security_code' id="security_code" type="text" placeholder="123" required />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="card_name">Nome do titular como aparece no cartão</Label>
                    <Input name='card_name' id="card_name" type="text" placeholder="Jhon Lorem Ispun" required />
                    </div>
                    <div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="doc_number">Documento do titular</Label>
                    <div className="flex items-center">
                        <Select name="type">
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="DOC" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="CPF">CPF</SelectItem>
                                <SelectItem value="CNPJ">CNPJ</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input name='doc_number' id="doc_number" type="text" placeholder="123.456.789-09" required className="rounded-r-md" />
                    </div>
                    </div>
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
