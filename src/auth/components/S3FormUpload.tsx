import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { s3UploadAction } from "../actions/s3UploadAction";

export default function S3FormUpload({ id }: { id: string }){
    return(
        <>
            <form action={s3UploadAction}>
                <div className="flex items-center">
                    <Input type="hidden" name="id" readOnly value={id}/>
                    <Input className="rounded-r-none focus:outline-none" type="file" name="file"/>
                    <Button type="submit" className="rounded-l-none">Enviar</Button>
                </div>
            </form>
        </>
    )
}