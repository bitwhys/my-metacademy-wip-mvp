"use client"

import React from "react"
import useStore from "@/store"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const ToastMessage = ({ source }: { source: string }) => {}
const CompileButton = () => {
  const { toast } = useToast()
  const { source } = useStore()

  return (
    <Button
      variant="secondary"
      onClick={() => {
        toast({
          title: "Scheduled: Compile Code ",
          description: source,
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Compile
    </Button>
  )
}

export default CompileButton
