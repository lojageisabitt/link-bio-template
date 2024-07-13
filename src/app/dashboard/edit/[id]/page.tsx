import { editArticle } from "@/blogAdm/actions/blogActions";
import { FormEditServer } from "@/blogAdm/components/formEditServer";
import ServicePublicBlog from "@/blogAdm/services/serviceBlog";

export default async function EditArticleBlog({ params }: { params: { id: string } }) {

  const article = await ServicePublicBlog.getArticleId(params.id);
  const data = await article.json();

  return (
    <div className="flex flex-col items-center p-4">
      <FormEditServer blog={data} editArticle={editArticle} />
    </div>
  );
}
