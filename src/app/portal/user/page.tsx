import Link from "next/link";
import UserAction from '@/auth/actions/userActions';
import AuthService from '@/auth/service/authService';
import S3FormUpload from "@/auth/components/S3FormUpload";
import Image from "next/image";
import DisplayPayment from "@/auth/components/displayUserPayment";

export default async function User() {
  const session = await AuthService.isSessionValid()
  const data = await UserAction.userData()
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-4">
        <h1>Pagina do usuario</h1>
        {/* // eslint-disable-next-line jsx-a11y/alt-text */}
        <div>{data!.image ? <Image src={data!.image} alt={data!.name} width={50} height={50} className="rounded-[50%]" /> : null }</div>
        <div>{session? <><p>{data!.name}</p></> : <></> }</div>
        <DisplayPayment/>
        <S3FormUpload id={data!.id} />
        <Link className="mt-10 p-4 bg-accent rounded" href="/logout">Sair</Link>
    </div>
  )
}