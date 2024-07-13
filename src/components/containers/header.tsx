import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  image: string;
  imageLink?: string;
  title: string;
  titleLink?: string;
};
//{props} : {props: HeaderProps}

export default function HeaderSite() {
  return (
    <>
      <Link className="px-4 py-2" href="/">
        <Image className="rounded-full" src="https://media.licdn.com/dms/image/D4E03AQGXnUcGF3Szvw/profile-displayphoto-shrink_200_200/0/1662487137170?e=1726099200&v=beta&t=F6CC1WDLQRz_iyg8lTmxPIgPurHDftw8zkvpfmXUrfE" alt="alt" width={100} height={100} />
      </Link>
      <Link className="px-4 py-2" href="/">
        <h6>I ACHEI</h6>
      </Link>
    </>
  );
}
