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
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
export default async function Dashboard() {
  const response = await ServicePublicBlog.getAllArticle();

  if (response.status !== 200) {
    return <OPS />;
  }

  const getallData: Blog[] = await response.json();

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-wrap justify-between gap-8 mt-10">
      {getallData.map((item: Blog) => (
        <Card className="max-w-[350px] w-full h-[350px] relative flex flex-col" key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            {item.subtitle ? <CardDescription>{item.subtitle}</CardDescription> : null}
          </CardHeader>
          <CardContent className="max-h-[4.5em] overflow-hidden">
            <p>{item.article}</p>
          </CardContent>
          <CardFooter className="mt-auto">
          <Link className="flex items-center gap-4 p-4" href={`/dashboard/edit/${item.id}`}><FaPencilAlt className="text-[1.2rem]"/> Editar</Link><Link  className="flex items-center gap-4 p-4" href="#"><FaTrashAlt className="text-[1.2rem]"/> Deletar</Link>
          </CardFooter>
        </Card>
      ))}
        </div>
    </div>
  );
}
