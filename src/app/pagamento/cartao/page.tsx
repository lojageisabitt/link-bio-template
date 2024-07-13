import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormPaymentCard } from "@/payments/components/formcard";


export default async function PageCard() {
 
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-between gap-8 mt-20">
       <FormPaymentCard/>
        </div>
    </div>
  );
}
