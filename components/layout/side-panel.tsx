"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { ScriptEditor } from "@/components/editors"

export type SidePanelProps = {}

const PanelHeader = ({ onCompile }: { onCompile: () => void }) => {
  return (
    <div className="bg-background flex h-16 shrink-0 items-center border-b p-4">
      <div className="flex w-full items-center justify-between">
        <span className="tracking-wider ">Source Editor</span>
        <div className="flex items-center gap-x-3">
          <div
            className="inline-flex divide-x divide-neutral-7 overflow-hidden rounded bg-background ring-1 ring-ring
            transition-colors duration-150 ease-linear hover:bg-accent"
          >
            <span className="inline-flex flex-col items-center justify-center px-2 py-1  font-medium text-muted-foreground text-xs">
              <span className="font-medium">ELK</span>
            </span>
            <button
              type="button"
              className="flex items-center px-2 py-1   font-medium  shadow-sm "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <Button variant="soft" size="sm">
            Compile
          </Button>
        </div>
      </div>
    </div>
  )
}

const SidePanel = ({}: SidePanelProps) => {
  const [source, setSource] = useState("")
  const [] = useState()
  const compileSource = () => {
    alert(source)
  }
  return (
    <div className="relative flex h-full w-[30rem] flex-col overflow-y-auto border-r bg-white">
      <PanelHeader onCompile={compileSource} />
      <div className="flex-1 pt-3 dark:bg-[var(--vscode-editor-background)]">
        <ScriptEditor onEditorChange={(p) => setSource(p)} />
      </div>
    </div>
  )
}

export default SidePanel
