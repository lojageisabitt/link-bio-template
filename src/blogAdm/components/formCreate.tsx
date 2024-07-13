import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link';
import { createArticle } from "../actions/blogActions"
 
export function FormCreateArticleBlog() {
  return (
    <Card className="min-w-[350px] max-w-[650px] w-full">
      <CardHeader>
        <CardTitle>Nova Postagem</CardTitle>
      </CardHeader>
    <form action={createArticle}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Titulo</Label>
              <Input name='title' id="title" placeholder="Digite o titulo do seu artigo." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subtitle">Descrição</Label>
              <Input name="subtitle" id="subtitle" placeholder="Breve descrição do seu artigo" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="article">Artigo</Label>
              <Textarea name="article" id="article" placeholder="Digite seu artigo" />
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href='/dashboard'><Button variant="outline">Cancel</Button></Link>
        <Button type='submit'>Enviar</Button>
      </CardFooter>
    </form>
    </Card>
  )
}