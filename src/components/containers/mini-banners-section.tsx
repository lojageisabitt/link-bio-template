import Link from "next/link";
import Image from "next/image";
type SocialProps = { image: string; imageLink: string };

const social: SocialProps[] = [
  {
    image: "https://cdn2.lnk.bi/uploads/7264218_20240408204316260-250.jpg?lu=2024-07-13+14%3A11%3A48",
    imageLink: "https://linktr.ee/bitsgamesbhoficial",
  },
  {
    image: "https://cdn2.lnk.bi/uploads/7273843_20240410014856655-250.jpg?lu=2024-07-13+14%3A11%3A48",
    imageLink: "https://br.octoshop.com/?kwkuniv=P512B07578553100-vf356f4n684vgxej8ahqqdrrqajkk-zhvzpwi9if&utm_source=kwanko&utm_content=492883",
  },
  {
    image: "https://cdn2.lnk.bi/uploads/7264394_20240408205133166-250.jpg?lu=2024-07-13+14%3A11%3A48",
    imageLink: "https://www.zeusgames.com.br/",
  },
];

export default function MiniBannersSection() {
  return (
    <div className="min-w-60 w-full pt-6 pb-6 border-[#ffffff] border-b-2 flex flex-col gap-4 text-center">
      <h5>PARCERIAS</h5>
      <div className="flex flex-wrap gap-4 justify-around">
        {social.map((item, index) => (
          <Link key={index} href={item.imageLink}>
            <Image className="sm:w-60" width={150} height={80} src={item.image} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}
