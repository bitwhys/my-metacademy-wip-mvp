import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-white dark:text-secondary-foreground hover:bg-secondary/80",
        "primary-subtle":
          "ring-1 ring-inset ring-[var(--primary-7)] bg-[var(--primary-3)] text-primary-foreground hover:bg-[var(--primary-5)] hover:ring-[var(--primary-8)]",
        "secondary-subtle":
          "ring-1 ring-inset ring-[var(--secondary-7)] bg-[var(--secondary-3)] text-secondary-foreground hover:bg-[var(--secondary-5)] hover:ring-[var(--secondary-8)]",
        "positive-subtle":
          "ring-1 ring-inset ring-[var(--positive-7)] bg-[var(--positive-3)] text-positive-foreground hover:bg-[var(--positive-5)] hover:ring-[var(--positive-8)]",
        "warning-subtle":
          "ring-1 ring-inset ring-[var(--warning-7)] bg-[var(--warning-3)] text-warning-foreground hover:bg-[var(--warning-5)] hover:ring-[var(--warning-8)]",
        "destructive-subtle":
          "ring-1 ring-inset ring-[var(--destructive-7)] bg-[var(--destructive-3)] text-destructive-foreground hover:bg-[var(--destructive-5)] hover:ring-[var(--destructive-8)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
