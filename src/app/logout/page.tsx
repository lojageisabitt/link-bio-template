import { Logout } from "@/auth/components/logout";

export default function PageLogout(){
    return(
        <>
      <div className="flex flex-col items-center justify-center min-w-[340px] max-w-[500px] my-20 mx-auto gap-4" >
      <Logout/>
      </div>
  </>
    )
}