'use server';
import { Blog, PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import  AuthService  from '../../auth/service/authService'

const prisma = new PrismaClient();

export async function createArticle(formData:FormData) {

        const title = formData.get('title') as string;
        const subtitle = formData.get('subtitle') as string;
        const article = formData.get('article') as string;
        const userId= String(await AuthService.getUserId())

        // Verifique se os valores foram obtidos corretamente
        if (!title || !subtitle || !article) {
            throw new Error('Todos os campos são obrigatórios');
        }

        await prisma.blog.create({
            data: {
                title,
                subtitle,
                article,
                userId
            }
        });
        console.log('Cadastro realizado com sucesso!');

        redirect('/dashboard')

    }


    export async function editArticle(formData: Partial<Blog>, id: string) {

        if (!id) {
          return console.log('Não foi possível encontrar o artigo');
        }
      
        const { title, subtitle, article } = formData;
      
        
          await prisma.blog.update({
            where: { id },
            data: {
              title,
              subtitle,
              article,
            },
          });
      
          console.log('Artigo editado com sucesso!');
          redirect('/dashboard');
      }


