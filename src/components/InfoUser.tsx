import UserAction from '@/auth/actions/userActions';
import { NavigationAdm } from "./navigationAdm";
import { NavigationUser } from "./navigationUser";

export default async function NavUserInfo() {
  const data = await UserAction.userData()
  return (
    <div className="flex items-center justify-between gap-4">
      <p>Olá <span>{data!.name}</span></p>
      {data!.type === "super" ? <NavigationAdm/> : <NavigationUser/>}
    </div>
  )
}