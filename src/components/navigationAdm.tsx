"use client"

import * as React from "react"
import Link from "next/link"
import { PiHandshakeDuotone, PiNotebookFill } from "react-icons/pi";
import { AiFillRead } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { LuMenu } from "react-icons/lu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationAdm() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><LuMenu  className="text-[1.2rem]" /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="min-w-[160px] gap-8 p-4">
              <li><Link className="flex gap-2 items-center" href="/blog"><PiNotebookFill className="text-[1.2rem]" />Blog</Link></li>
              <li><Link className="flex gap-2 items-center" href="/pagamento"><PiHandshakeDuotone className="text-[1.2rem]" />Apoie</Link></li>
              <li><Link className="flex gap-2 items-center" href="/dashboard"><AiFillRead className="text-[1.2rem]" />Painel</Link></li>
              <li><Link className="flex gap-2 items-center" href="/portal/user"><FaUserCog className="text-[1.2rem]" />Minha conta</Link></li>
              <li><Link className="flex gap-2 items-center" href="/logout"><ImExit  className="text-[1.2rem]" />Sair</Link></li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

