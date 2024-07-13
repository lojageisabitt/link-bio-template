import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from "next/link"

export default async function Presentation() {

return (
    <div className="flex items-center justify-between gap-4 py-6 w-full">
      <Carousel className='w-[90%] mx-auto my-auto'>
        <CarouselContent className='w-full'>
          <CarouselItem className='w-full'>
            <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="object-cover w-full md:w-1/2 md:h-[390px] rounded-t-lg md:rounded-none md:rounded-s-lg" width={1024} height={768} src={'/assets/angularAws.jpg'} alt=""/>
                <div className="flex flex-col p-4 justify-between leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aws Angular Portifólio</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Portifório criado com ci-cd para deploy automatico na AWS, consumindo a api do github e usando Angular Material</p>
                    <Link href={"http://portifoliogeisabitt.s3-website.us-east-2.amazonaws.com/"} target="blank"><Button>Ver Site</Button></Link>
                </div>
            </div>
          </CarouselItem>
        <CarouselItem className='w-full'>
            <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="object-cover w-full md:w-1/2 md:h-[390px] rounded-t-lg md:rounded-none md:rounded-s-lg" width={1024} height={768} src={'/assets/cctf.jpg'} alt=""/>
                <div className="flex flex-col p-4 justify-between leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CCTF</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Site MVP criado para igreja Comunidade cristã Terra Fértil.</p>
                    <Link href={"https://www.cctf.com.br/"} target="blank"><Button>Ver Site</Button></Link>
                </div>
            </div>
          </CarouselItem>
          <CarouselItem className='w-full'>
            <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="object-cover w-full md:w-1/2 md:h-[390px] rounded-t-lg md:rounded-none md:rounded-s-lg" width={1024} height={768} src={'/assets/publist.jpg'} alt=""/>
                <div className="flex flex-col p-4 justify-between leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pubist Corporative</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Site corporativo - design elegante.</p>
                    <Link href={"https://publist-rho.vercel.app/"} target="blank"><Button>Ver Site</Button></Link>
                </div>
            </div>
          </CarouselItem>
          <CarouselItem className='w-full'>
            <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="object-cover w-full md:w-1/2 md:h-[390px] rounded-t-lg md:rounded-none md:rounded-s-lg" width={1024} height={768} src={'/assets/animaisFantasticos.jpg'} alt=""/>
                <div className="flex flex-col p-4 justify-between leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Animais Fantasticos</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Site dinamico responsivo e cheio de animações funcionais e leves.</p>
                    <Link href={"https://geisabitt.github.io/animals-langding-page/"} target="blank"><Button>Ver Site</Button></Link>
                </div>
            </div>
          </CarouselItem>
          <CarouselItem className='w-full'>
            <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="object-cover w-full md:w-1/2 md:h-[390px] rounded-t-lg md:rounded-none md:rounded-s-lg" width={1024} height={768} src={'/assets/makeup.jpg'} alt=""/>
                <div className="flex flex-col p-4 justify-between leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Makeup</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Site api e-commerce sem framework</p>
                    <Link href={"https://geisabitt.github.io/api-consume-makeup/"} target="blank"><Button>Ver Site</Button></Link>
                </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
)
}