import Link from "next/link";
import Image from "next/image";
type Products = { title: string; image: string; imageLink: string };

const products: Products[] = [
  {
    title: "titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink:
      "https://pt.aliexpress.com/item/1005007166415190.html?aff_fcid=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&tt=CPS_NORMAL&aff_fsk=_DFRQGF1&aff_platform=shareComponent-detail&sk=_DFRQGF1&aff_trace_key=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&terminal_id=aad5bc5dcc744669a5c01c5b63953848&afSmartRedirect=y&gatewayAdapt=glo2bra",
  },
  {
    title: "titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink: "https://ae01.alicdn.com/kf/S4e81d90941974707a4d4316ea7221ebb3/Cubot-Hafury-V1-smartphone-Android-Octa-core-16-GB-de-RAM-8-GB-8-GB-estendidos.png_.webpa",
  },
  {
    title: "titulo do meu produto titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink: "https://ae01.alicdn.com/kf/S882729441e5e4174a96db27b66472967e/ThundeaL-Projetor-Android-Port-til-TDA6-Full-HD-1080P-2K-V-deo-4K-Home-Theater-Foco.jpg_.webp",
  },
  {
    title: "titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink:
      "https://pt.aliexpress.com/item/1005007166415190.html?aff_fcid=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&tt=CPS_NORMAL&aff_fsk=_DFRQGF1&aff_platform=shareComponent-detail&sk=_DFRQGF1&aff_trace_key=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&terminal_id=aad5bc5dcc744669a5c01c5b63953848&afSmartRedirect=y&gatewayAdapt=glo2bra",
  },
  {
    title: "titulo do meu produto titulo do meu produto titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink:
      "https://pt.aliexpress.com/item/1005007166415190.html?aff_fcid=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&tt=CPS_NORMAL&aff_fsk=_DFRQGF1&aff_platform=shareComponent-detail&sk=_DFRQGF1&aff_trace_key=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&terminal_id=aad5bc5dcc744669a5c01c5b63953848&afSmartRedirect=y&gatewayAdapt=glo2bra",
  },
  {
    title: "titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink:
      "https://pt.aliexpress.com/item/1005007166415190.html?aff_fcid=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&tt=CPS_NORMAL&aff_fsk=_DFRQGF1&aff_platform=shareComponent-detail&sk=_DFRQGF1&aff_trace_key=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&terminal_id=aad5bc5dcc744669a5c01c5b63953848&afSmartRedirect=y&gatewayAdapt=glo2bra",
  },
  {
    title: "titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink:
      "https://pt.aliexpress.com/item/1005007166415190.html?aff_fcid=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&tt=CPS_NORMAL&aff_fsk=_DFRQGF1&aff_platform=shareComponent-detail&sk=_DFRQGF1&aff_trace_key=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&terminal_id=aad5bc5dcc744669a5c01c5b63953848&afSmartRedirect=y&gatewayAdapt=glo2bra",
  },
  {
    title: "titulo do meu produto",
    image: "https://ae01.alicdn.com/kf/S5f68be75a1344e908ba1e4f74b86dab8b/Estreia-mundial-CUBOT-MAX-5-Android-smartphone-5G-Dimensity-8200-4nm-tela-grande-de-6.jpg_.webp",
    imageLink:
      "https://pt.aliexpress.com/item/1005007166415190.html?aff_fcid=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&tt=CPS_NORMAL&aff_fsk=_DFRQGF1&aff_platform=shareComponent-detail&sk=_DFRQGF1&aff_trace_key=545c3d9daa4642288a6ed40b9f45daf1-1720835171737-03853-_DFRQGF1&terminal_id=aad5bc5dcc744669a5c01c5b63953848&afSmartRedirect=y&gatewayAdapt=glo2bra",
  },
];

export default function ProductsSection() {
  return (
    <div className="min-w-60 w-full pt-6 pb-6 flex flex-col gap-4 text-center">
      <h5>PRODUTOS MOSTRADOS NOS VÍDEOS</h5>
      <h6>Links seguros da Amazon, Banggood, AliExpress, Mercado Livre e Octoshop</h6>
      <div className="flex flex-wrap gap-4 justify-around">
        {products.map((product, index) => (
          <Link className="sm:w-72 w-[45%]  bg-[#07000E]" key={index} href={product.imageLink}>
            <Image className="sm:w-72 w-full" width={150} height={80} src={product.image} alt="" />
            <h3 className="py-4 px-2">{product.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
