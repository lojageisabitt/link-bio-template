import { PageQrCodePix }  from "@/payments/components/qrCodePix";
import ServicePayment from "@/payments/service/servicePayment";


export default async function Page({ params }: { params: { id: any } }) {
    const id = params.id
    const data = await ServicePayment.getInfoPayment(id)
    
    if (data){
        console.log(data);
    }
    
    return(

        <>
            <div className="flex min-h-screen flex-col items-center p-4">
            <PageQrCodePix detail={data.detail} />
            </div>
        </>

     )
  }