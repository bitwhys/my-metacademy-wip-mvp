"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.moon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 h-6 w-6" />
      <Icons.sun className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 h-6 w-6 text-muted-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
