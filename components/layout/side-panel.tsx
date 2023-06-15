"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScriptEditor } from "@/components/editors"
import CompileButton from "@/components/editors/compile-button"

export type SidePanelProps = {}

const PanelHeader = ({ onCompile }: { onCompile: () => void }) => {
  return (
    <div className="bg-background flex h-16 shrink-0 items-center border-b p-4">
      <div className="flex w-full items-center justify-between">
        <span className="tracking-wider ">Source Editor</span>
        <div className="flex items-center gap-x-3">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Layout Engine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Dagre</SelectItem>
              <SelectItem value="dark">ELK</SelectItem>
              <SelectItem value="system">TALA</SelectItem>
            </SelectContent>
          </Select>
          <CompileButton />
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
