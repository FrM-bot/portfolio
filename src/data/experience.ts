export type Experience = {
  position: string
  location: {
    country: string
  }
  company: string
  date: {
    from: Date | string
    to?: Date | string
  }
  work: string[]
}
