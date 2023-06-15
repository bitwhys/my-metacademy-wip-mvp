import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon, LucideProps } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export type NavItemProps = {
  item: (typeof siteConfig.mainNav)[0]
}

const NavItem = ({ item }: NavItemProps) => {
  const pathName = usePathname()
  const [parent, current] = pathName.replace(/^\//, "").split("/")
  const isCurrentPath = pathName === item.href || pathName === `/${parent}`
  const Icon = Icons[item.icon]
  // @ts-ignore
  // const Icon = Icons[icon]
  return (
    <Link
      href={item.href}
      className={cn(
        buttonVariants({ variant: isCurrentPath ? "soft" : "ghost" }),
        "aspect-square"
      )}
    >
      {/*{isCurrentPath ? "Y" : "N"}*/}
      <Icon className="h-6 w-6" />
    </Link>
  )
}

export default NavItem
