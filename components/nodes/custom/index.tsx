import React from "react"
import { Handle, NodeProps, Position, useOnSelectionChange } from "reactflow"

export type CustomNodeData = {
  label: string
}

const CustomNode = ({ data, isConnectable }: NodeProps<CustomNodeData>) => {
  useOnSelectionChange({
    onChange: ({ nodes, edges }) =>
      console.log("changed selection", nodes, edges),
  })
  return (
    <>
      <div className="rounded-md bg-card p-2.5 text-card-foreground ring-1 ring-inset ring-input">
        {data.label}
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  )
}

export default CustomNode
