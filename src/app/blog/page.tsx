import ServicePublicBlog from "@/blogAdm/services/serviceBlog";
import OPS from "../ops/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@prisma/client";
import Link from "next/link";

export default async function CreateArticleBlog() {
  const response = await ServicePublicBlog.getAllArticle();

  if (response.status !== 200) {
    return <OPS />;
  }

  const getallData: Blog[] = await response.json();

  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center gap-4 p-24">
      {getallData.map((item: Blog) => (
        <Card className="max-w-[350px] w-full h-[350px] relative flex flex-col" key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            {item.subtitle ? <CardDescription>{item.subtitle}</CardDescription> : null}
          </CardHeader>
          <CardContent className="max-h-[6em] overflow-hidden">
            <p>{item.article}</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link href={`/blog/${item.id}`}>Ler mais</Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
