import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const { render } = await import(path.join(root, 'dist-ssr/entry-server.js'))
const template = await readFile(path.join(root, 'dist/index.html'), 'utf-8')

const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  throw new Error('Prerender failed: #root container not found in dist/index.html')
}

const html = template.replace(marker, `<div id="root">${render()}</div>`)
await writeFile(path.join(root, 'dist/index.html'), html)
console.log('Prerendered static HTML into dist/index.html')
