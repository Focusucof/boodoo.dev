import { visit } from 'unist-util-visit'
import type { Root, Code } from 'mdast'

function escapeHtml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function remarkMermaid() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code) => {
      if (node.lang === 'mermaid') {
        node.type = 'html' as any
        ;(node as any).value = `<pre class="mermaid">${escapeHtml(node.value)}</pre>`
      }
    })
  }
}
