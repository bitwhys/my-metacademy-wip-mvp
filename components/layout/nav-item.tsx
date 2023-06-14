import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export type NavItemProps = {
  slug: string
  icon: string
}

const NavItem = ({ slug, icon }: NavItemProps) => {
  const pathName = usePathname()
  const isCurrentPath = pathName === slug
  // @ts-ignore
  // const Icon = Icons[icon]
  return (
    <Link
      href={slug}
      className={cn(
        buttonVariants({ variant: isCurrentPath ? "soft" : "ghost" })
      )}
    >
      {isCurrentPath ? "Y" : "N"}
      {/*<Icon/>*/}
    </Link>
  )
}

export default NavItem
