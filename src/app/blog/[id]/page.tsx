import ServicePublicBlog from "@/blogAdm/services/serviceBlog";
import { ViewArticle } from "@/blogAdm/components/viewArticleId";
export default async function ViewArticleBlog({ params }: { params: { id: string } }) {

  const article = await ServicePublicBlog.getArticleId(params.id);
  const data = await article.json();

  return (
    <div className="flex flex-col items-center p-4 my-20">
      <ViewArticle blog={data}/>
    </div>
  );
}
