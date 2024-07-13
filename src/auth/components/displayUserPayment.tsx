import ServicePublicBlog from "@/blogAdm/services/serviceBlog";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaymentUser } from "@prisma/client";
import Link from "next/link";
import { FaFileInvoiceDollar } from "react-icons/fa";
import UserAction from "../actions/userActions";
export default async function DisplayPayment() {
    const data = await UserAction.userPaymentData();

    return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex flex-wrap justify-between gap-8">
      {data.map((item: Partial<PaymentUser>) => (
        <Card className="w-full relative flex justify-between items-center" key={item.paymentId}>
          <CardHeader>
            <CardTitle>{item.paymentId}</CardTitle>
          </CardHeader>
          <CardFooter className="mt-auto">
          <Link className="flex items-center gap-4" href={'#'}><FaFileInvoiceDollar className="text-[1.2rem]"/>Ver detalhes do pagamento</Link>
          {/* <Link className="flex items-center gap-4" href={`/api/mp/payment/${item.paymentId}`}><FaFileInvoiceDollar className="text-[1.2rem]"/>Ver detalhes do pagamento</Link> */}
          </CardFooter>
        </Card>
      ))}
        </div>
    </div>
  );
}
