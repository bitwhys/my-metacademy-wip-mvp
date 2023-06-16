"use client"

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
  const [parent, _] = pathName.replace(/^\//, "").split("/")
  const slug = item.href
  const isCurrentPath = slug === pathName || slug === `/${parent}`

  const Icon = Icons[item.icon]
  // @ts-ignore
  // const Icon = Icons[icon]
  return (
    <Link
      data-link-state={isCurrentPath ? "active" : "idle"}
      href={slug}
      className={cn(
        buttonVariants({ variant: isCurrentPath ? "primary-subtle" : "ghost" }),
        "w-full aspect-square p-0 text-muted-foreground group"
      )}
    >
      {/*{isCurrentPath ? "Y" : "N"}*/}
      <Icon className="h-6 w-6 group-data-[link-state=active]:text-primary-foreground group-hover:text-foreground" />
    </Link>
  )
}

export default NavItem
