import Link from "next/link";
import AuthService from '../auth/service/authService'

export default async function Sidebar(){
  const session = await AuthService.isSessionValid()

    if (!session){
      return(
      <></>
    )}

    return(
        <div className="max-w-2xl relative">
        <aside className="w-64 fixed left-0 bottom-0" aria-label="Sidebar">
          <div className="px-3 py-20 overflow-y-auto bg-accent h-[100vh]">
            <ul className="space-y-2 my-5">
              <li>
                <Link
                className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-popover"
                href="/">
                  <span className="ml-3">Início</span>
                </Link>
              </li>
              <li>
                <Link
                className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-popover"
                href="/dashboard/create">
                  <span className="ml-3">Criar</span>
                </Link>
              </li>
              <li>
                <Link
                className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-popover"
                href="/dashboard">
                  <span className="ml-3">Painel de Retiro</span>
                </Link>
              </li>
              <li>
                <Link href="#"
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-popover">
                  <span className="flex-1 ml-3 whitespace-nowrap">Cadastrar</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        </div>
    )
  };