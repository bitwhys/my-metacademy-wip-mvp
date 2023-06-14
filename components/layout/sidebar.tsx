"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import NavItem from "@/components/layout/nav-item"
import { ThemeToggle } from "@/components/theme-toggle"

export type SidebarProps = {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="hidden shrink-0 lg:flex">
      <div className="flex w-16 flex-col justify-between border-r  bg-background">
        <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="flex-1">
            <div className="inline-flex h-16 w-16 items-center justify-center bg-primary">
              <Icons.logo className="h-10 w-10 text-white" />
            </div>
            <div className="-mt-px border-t">
              <div className="space-y-8 px-2 pt-4">
                <NavItem slug="#" icon="lighthouse" />
                <ul className="flex flex-col items-center gap-y-2">
                  {[
                    { slug: "", icon: "books" },
                    { slug: "", icon: "roadmap" },
                    { slug: "planet", icon: "code" },
                    { slug: "/builder/2", icon: "code" },
                  ].map((item) => (
                    <NavItem slug={item.slug} icon={item.icon} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="sticky inset-x-0 bottom-0 border-t bg-background p-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
