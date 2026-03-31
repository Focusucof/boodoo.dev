import { visit } from 'unist-util-visit'
import type { Root, Code } from 'mdast'

export function remarkMermaid() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code) => {
      if (node.lang === 'mermaid') {
        const encoded = Buffer.from(encodeURIComponent(node.value)).toString('base64')
        node.type = 'html' as any
        ;(node as any).value = `<pre class="mermaid" data-graph="${encoded}"></pre>`
      }
    })
  }
}
