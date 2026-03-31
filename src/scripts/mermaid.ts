import mermaid from 'mermaid'

// Get CSS variables from root
const getColor = (varName: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim()
}

function initializeMermaid() {
  const primary = getColor('--primary')
  const foreground = getColor('--foreground')
  const border = getColor('--border')
  const muted = getColor('--muted')
  const mutedForeground = getColor('--muted-foreground')

  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    themeVariables: {
      darkMode: true,
      background: 'transparent',
      primaryColor: primary,
      primaryTextColor: foreground,
      primaryBorderColor: border,
      secondaryColor: muted,
      tertiaryColor: muted,
      mainBkg: 'transparent',
      secondBkg: muted,
      lineColor: mutedForeground,
      border1: border,
      border2: border,
      textColor: foreground,
      fontSize: '14px',
      fontFamily: 'JetBrains Mono, monospace',
    },
    flowchart: {
      htmlLabels: true,
      curve: 'basis',
      padding: 30,
      useMaxWidth: true,
    },
    sequence: {
      diagramMarginX: 20,
      diagramMarginY: 20,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
    },
  })
}

async function renderMermaid() {
  await mermaid.run({
    querySelector: '.mermaid',
  })
}

// Initialize and render
if (typeof window !== 'undefined') {
  // Initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeMermaid()
      renderMermaid()
    })
  } else {
    initializeMermaid()
    renderMermaid()
  }

  // Re-render when navigating between pages
  document.addEventListener('astro:page-load', () => {
    initializeMermaid()
    renderMermaid()
  })
}
