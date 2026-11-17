export type ProjectLink = {
  href: string
  label: string
}

export type Project = {
  title: string
  techs: string[]
  links: ProjectLink[]
  link?: string
  dashboard?: string
  github?: string
  image?: string
  highlight?: boolean
  description?: string
}
