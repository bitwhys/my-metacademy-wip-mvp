import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"

export type ComponentDrawerProps = {}

const ComponentDrawer = ({}: ComponentDrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-background px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10 sm:inline-flex"
        >
          <Icons.puzzle
            className="-ml-0.5 h-6 w-6 text-muted-foreground"
            aria-hidden="true"
          />
          Components
        </button>
      </SheetTrigger>
      <SheetContent position="right" size="sm">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ComponentDrawer
