"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from 'next/link';
import { Blog } from "@prisma/client"

interface ViewProps {
  blog: Partial<Blog>;
}

export function ViewArticle({ blog }: ViewProps) {
  const [articleId, setArticleId] = useState({
    id: blog.id,
    title: blog.title,
    subtitle: blog.subtitle,
    article: blog.article
  });

  return (
    <Card className="min-w-[350px] max-w-[650px] w-full">
      <CardHeader>
        <CardTitle>{articleId.title}</CardTitle>
        <CardDescription>{articleId.subtitle}</CardDescription>
      </CardHeader>
        <CardContent className='flex-col gap-2'>
        {articleId.article ? (
          articleId.article.split('.').map((part: string, index: number) => (
            <p className='p-2 text-justify text-left' key={index}>{`${part}.`}</p>
          ))
        ) : (
          <p>Artigo indisponível</p>
        )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href='/blog'><Button variant="outline">Voltar</Button></Link>
        </CardFooter>
    </Card>
  );
}