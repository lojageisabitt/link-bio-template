import SocialSection from "@/components/containers/social-section";
import HeaderSite from "../components/containers/header";
import MiniBannersSection from "@/components/containers/mini-banners-section";
import ProductsSection from "@/components/containers/products-section";
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-w-[340px] max-w-[90%] my-20 mx-auto gap-16">
      <HeaderSite />
      <SocialSection />
      <MiniBannersSection />
      <ProductsSection />
    </div>
  );
}
