export type Experience = {
  position: string
  location: {
    city: string,
    country: string
  }
  company: string
  date: {
    from: Date | string
    to?: Date | string
  }
  work: string[]
}

// export const experience: Experience[] = 
