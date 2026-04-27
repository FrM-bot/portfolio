/** Mirrors `.oxfmtrc.json` ignorePatterns — oxfmt skips these; calling it with only ignored paths yields an error. */
function isOxfmtExcluded(file) {
  const n = file.replace(/\\/g, '/')
  return (
    n.includes('/node_modules/') ||
    n.startsWith('node_modules/') ||
    n.includes('/dist/') ||
    n.startsWith('dist/') ||
    n.includes('/.astro/') ||
    n.startsWith('.astro/') ||
    n.includes('/.agents/') ||
    n.startsWith('.agents/') ||
    n.includes('/.claude/') ||
    n.startsWith('.claude/')
  )
}

function shellQuote(file) {
  if (!/[^\w@%+=:,./-]/.test(file)) return file
  return `"${file.replace(/(["\\$`])/g, '\\$1')}"`
}

export default {
  '*.{js,mjs,cjs,ts,mts,cts,tsx,astro,vue,svelte}': (filenames) => {
    const cmds = []
    if (filenames.length) cmds.push(`oxlint --fix ${filenames.map(shellQuote).join(' ')}`)
    const forFmt = filenames.filter((f) => !isOxfmtExcluded(f))
    if (forFmt.length) cmds.push(`oxfmt --write ${forFmt.map(shellQuote).join(' ')}`)
    return cmds
  },
  '*.{json,css,md,mdx}': (filenames) => {
    const forFmt = filenames.filter((f) => !isOxfmtExcluded(f))
    return forFmt.length ? [`oxfmt --write ${forFmt.map(shellQuote).join(' ')}`] : []
  },
}
