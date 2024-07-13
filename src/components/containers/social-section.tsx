import Link from "next/link";
import { BsInstagram, BsYoutube, BsFacebook, BsWhatsapp, BsTiktok, BsLinkedin, BsEnvelope } from "react-icons/bs";
type SocialProps = [name: string, socialLink: string];
//{props} : {props: SocialProps}

export default function SocialSection() {
  return (
    <div className="min-w-60 w-full pt-6 pb-6 border-[#ffffff] border-t-2 border-b-2 flex flex-col gap-4 text-center">
      <h5>ME SIGA NAS REDES SOCIAIS</h5>
      <div className="flex justify-around">
        <Link href="/">
          <BsInstagram className="w-6 h-6" />
        </Link>
        <Link href="/">
          <BsYoutube className="w-6 h-6" />
        </Link>
        <Link href="/">
          <BsFacebook className="w-6 h-6" />
        </Link>
        <Link href="/">
          <BsWhatsapp className="w-6 h-6" />
        </Link>
        <Link href="/">
          <BsTiktok className="w-6 h-6" />
        </Link>
        <Link href="/">
          <BsEnvelope className="w-6 h-6" />
        </Link>
        <Link href="/">
          <BsLinkedin className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
