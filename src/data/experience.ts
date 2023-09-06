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

const experience: Experience[] = [
  {
    position: 'Junior fullstack engineer (Remote)',
    location: {
      city: 'Córdoba',
      country: 'Argentina'
    },
    company: 'GoSiclall',
    date: {
      from: '2023-06-25'
    },
    work: [
      'Next.JS | TypeScript | Tailwind CSS | Zod | Zustand | Next Auth | Tanstack Query'
    ]
  },
  {
    position: 'Junior backend developer (Remote)',
    location: {
      city: 'Córdoba',
      country: 'Argentina'
    },
    company: 'GoSiclall',
    date: {
      from: '2023-05-26',
      to: '2023-06-25'
    },
    work: [
      'Express | Node | JWT | MercadoPago | Prisma | MongoDB | Zod'
    ]
  }
]

export default experience
