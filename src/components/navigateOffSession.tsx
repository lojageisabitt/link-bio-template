"use client"

import * as React from "react"
import Link from "next/link"
import { PiNotebookFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { LuMenu } from "react-icons/lu";
export function NavigationOffSession() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><LuMenu  className="text-[1.2rem]" /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="min-w-[160px] gap-8 p-4">
              <li><Link className="flex gap-2 items-center" href="/blog"><PiNotebookFill className="text-[1.2rem]" />Blog</Link></li>
              <li><Link className="flex gap-2 items-center" href="/portal/cadastro"><FaUserPlus className="text-[1.2rem]" />Cadastre-se</Link></li>
              <li><Link className="flex gap-2 items-center" href="/portal/login"><FaSignInAlt  className="text-[1.2rem]" />Login</Link></li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

