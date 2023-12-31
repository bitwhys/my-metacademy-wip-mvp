import "@/styles/globals.css"
import React from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Sidebar } from "@/components/layout"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { fontMono, fontSans } from "@/styles/fonts"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex h-screen">
              {/* Static sidebar for desktop */}
              <Sidebar />
              <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                {/* Mobile top navigation */}
                {/*<MobileTopNavigation />*/}
                <main className="flex flex-1 overflow-hidden">{children}</main>
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
