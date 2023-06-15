"use client"

import { useState } from "react"
import ReactFlow, { Background, BackgroundVariant, NodeProps } from "reactflow"

import "reactflow/dist/style.css"
import type { Node } from "reactflow"

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "HTML (structure)" },
    position: { x: 250, y: 25 },
    className: "baseNode",
  },

  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>CSS (styling)</div> },
    position: { x: 100, y: 125 },
    className: "baseNode",
  },
  {
    id: "3",
    type: "output",
    data: { label: "JavaScript (Behavior)" },
    position: { x: 250, y: 250 },
    className: "baseNode",
  },
]

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
]

export type BuilderProps = {}

const Builder = ({}: BuilderProps) => {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  return (
    <ReactFlow nodes={nodes} edges={edges} fitView>
      <Background color="var(--neutral-9)" variant={BackgroundVariant.Dots} />
    </ReactFlow>
  )
}

export default Builder
