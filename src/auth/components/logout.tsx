
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
import Link from "next/link"
import AuthActions from '@/auth/actions/authActions';

export function Logout() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Deseja mesmo sair</CardTitle>
        <CardDescription>Ao sair você não podetá acessar a pagina de usuario ou fazer comentários</CardDescription>
      </CardHeader>
        <CardFooter className="flex justify-between">
            <Link href='/api/logout' className={buttonVariants({variant:"default"})}>Sair</Link>
        </CardFooter>
    </Card>
  )
}
