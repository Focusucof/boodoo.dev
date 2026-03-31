import { visit } from 'unist-util-visit'
import type { Root, Code } from 'mdast'

export function remarkMermaid() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code) => {
      if (node.lang === 'mermaid') {
        // Convert code block to HTML with mermaid class
        node.type = 'html' as any
        ;(node as any).value = `<pre class="mermaid">${node.value}</pre>`
      }
    })
  }
}
