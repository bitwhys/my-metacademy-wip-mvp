import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Footer } from "@/components/layout/footer"
import { Illustration } from "@/components/layout/illustration"

export default function IndexPage() {
  return (
    <>
      <div className="grid min-h-full w-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Badge variant="outline">Public Alpha</Badge>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            There&apos;s a new dawn on the horizon
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            We&apos;re building something special, playground with out builder
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/builder" className={cn(buttonVariants({}))}>
              Try demo
            </Link>
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
