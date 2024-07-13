import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function OPS(){
    return (
        <Card className="flex justify-center p-20 border-0">
            <CardHeader className="bg-accent rounded">
                <CardTitle className="p-4">Algo deu errado. Continue navegando entrando em um dos links abaixo.</CardTitle>
                    <CardDescription className="flex justify-center p-4 gap-4">
                        <Link className="bg-popover hover:bg-secondary font-bold py-2 px-4 rounded" href="/">Inicio</Link>
                        <Link className="bg-popover hover:bg-secondary font-bold py-2 px-4 rounded" href="/blog">BLog</Link>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}