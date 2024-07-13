import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  image: string;
  imageLink?: string;
  title: string;
  titleLink?: string;
};

const headerProps: HeaderProps = {
  image: "https://media.licdn.com/dms/image/D4E03AQGXnUcGF3Szvw/profile-displayphoto-shrink_200_200/0/1662487137170?e=1726099200&v=beta&t=F6CC1WDLQRz_iyg8lTmxPIgPurHDftw8zkvpfmXUrfE",
  imageLink: "https://linkedin.com/in/geisabittencourt",
  title: "I Achei",
  titleLink: "https://www.instagram.com/geisabitt/",
};

export default function HeaderSite() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Link className="px-4 py-2" href={headerProps.imageLink ?? "/"}>
        <Image className="rounded-full" src={headerProps.image} alt="alt" width={100} height={100} />
      </Link>
      <Link className="px-4 py-2" href={headerProps.titleLink ?? "/"}>
        <h6>{headerProps.title}</h6>
      </Link>
    </div>
  );
}
