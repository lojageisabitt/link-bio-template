"use server"
import { S3Client, PutObjectCommand, PutObjectCommandOutput } from '@aws-sdk/client-s3';
import { PrismaClient, Users } from '@prisma/client';
import { redirect } from 'next/navigation';
import sharp from "sharp";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();
// AWS_PUBLIC_KEY
// AWS_PRIVATE_KEY
// AWS_REGION
// AWS_BUCKET

const s3Client = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_PUBLIC_KEY!,
        secretAccessKey: process.env.AWS_PRIVATE_KEY!,
    }
});

export async function s3UploadAction(formData:FormData) {
    const file = await formData.get('file') as File;
    const id = await formData.get('id') as string;
    
    console.log(file);

    const fileBuffer = await sharp(await file.arrayBuffer())
        .jpeg({ quality: 50 })
        .resize(400, 400)
        .toBuffer();

    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `${uuidv4()}-${file.name}`,
        Body: fileBuffer,
        ContentType: "image/jpg",
    };

    const command = new PutObjectCommand(params);
    
    try {
        const response: PutObjectCommandOutput = await s3Client.send(command);
        const urlImage = `https://fotosretiroanas2022.s3.us-east-2.amazonaws.com/${params.Key}`;
        console.log("Foto enviada com sucesso", response, '<<<<<<<<<<<<<<<<<params name?>>>>>>>>>>>>>>>>>', urlImage);
        await uploadUserAvatar(urlImage, id)
      } catch (error) {
        throw error;
      }
}
export async function uploadUserAvatar(urlImage: string, id: string) {

    if (!id) {
        return console.log('Não foi possível encontrar o artigo');
    }

        await prisma.users.update({
        where: { id },
        data: {
            image: urlImage
        },
    });

        console.log('Artigo editado com sucesso!');
        redirect('/portal/user');
  }