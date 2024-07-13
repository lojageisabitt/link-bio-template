"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link';
import { Blog } from "@prisma/client"

interface FormEditProps {
  blog: Partial<Blog>;
  editArticle: (formData: Partial<Blog>, id: string) => Promise<void>;
}

export function FormEditServer({ blog, editArticle }: FormEditProps) {
  const [formData, setFormData] = useState({
    id: blog.id,
    title: blog.title,
    subtitle: blog.subtitle,
    article: blog.article
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await editArticle(formData, blog.id!);
      // Redirecionar aqui, se necessário
    } catch (error) {
      console.error('Erro ao editar o artigo:', error);
    }
  };
//14:50 //15:20
  return (
    <Card className="min-w-[350px] max-w-[650px] w-full">
      <CardHeader>
        <CardTitle>Editar Postagem</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Titulo</Label>
              <Input name='title' id="title" placeholder="Digite o titulo do seu artigo." value={formData.title} onChange={handleChange} />
              </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subtitle">Descrição</Label>
              <Input name="subtitle" id="subtitle" placeholder="Breve descrição do seu artigo" value={formData.subtitle} onChange={handleChange} />
              </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="article">Artigo</Label>
              <Textarea name="article" id="article" placeholder="Digite seu artigo" value={formData.article} onChange={handleChange} />
              </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href='/dashboard'><Button variant="outline">Cancelar</Button></Link>
          <Button type='submit'>Enviar</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
