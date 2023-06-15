import { nanoid } from "nanoid/non-secure"
import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnEdgesChange,
  OnNodesChange,
  XYPosition,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow"
import { create } from "zustand"

export type RFState = {
  nodes: Node[]
  edges: Edge[]
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  addChildNode: (parentNode: Node, position: XYPosition) => void
  updateNodeLabel: (nodeId: string, label: string) => void
}

export type ScriptState = {
  source: string
}

const useStore = create<RFState & ScriptState>((set, get) => ({
  nodes: [
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
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3", animated: true },
  ],
  source: "",
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  addChildNode: (parentNode: Node, position: XYPosition) => {
    const newNode = {
      id: nanoid(),
      type: "mindmap",
      data: { label: "New Node" },
      position,
      parentNode: parentNode.id,
    }

    const newEdge = {
      id: nanoid(),
      source: parentNode.id,
      target: newNode.id,
    }

    set({
      nodes: [...get().nodes, newNode],
      edges: [...get().edges, newEdge],
    })
  },
  updateNodeLabel: (nodeId: string, label: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, label }
        }

        return node
      }),
    })
  },
}))

export default useStore
