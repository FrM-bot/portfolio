type Social = {
  label: string
  link: string
}

export type Presentation = {
  mail: string
  title: string
  description: string
  curriculum: string
  socials: Social[]
  profile?: string
}
