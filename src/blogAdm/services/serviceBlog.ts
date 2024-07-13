import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllArticle() {
  try {
    const allArticles = await prisma.blog.findMany();
    
    if (!allArticles || allArticles.length === 0) {
      return NextResponse.json({ message: 'Nenhum artigo encontrado.' }, { status: 404 });
    }
  
    return NextResponse.json(allArticles);

  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return NextResponse.json({ message: 'Erro ao buscar artigos.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

async function getArticleId(id:string){
  try {

    const getArtcleId = await prisma.blog.findFirst({
      where: { id },
      select: {
          id: true,
          userId:true,
          title:true,
          subtitle:true,
          article:true,
          createdAt:true,
          updatedAt:true,
      }
  })

    if (!getArtcleId) {
      return NextResponse.json({ message: 'Artigo não encontrado.' }, { status: 404 });
    }

    return NextResponse.json(getArtcleId);

  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return NextResponse.json({ message: 'Erro ao buscar artigos.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

const ServicePublicBlog = {
  getAllArticle,
  getArticleId
};

export default ServicePublicBlog;
