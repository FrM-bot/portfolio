export type Project = {
  title: string
  techs: string[]
  link: string
  github: string
  image: string
  highlight?: boolean
  description?: string
}

const projects: Project[] = [
  {
    title: "Weather App",
    techs: ["React"],
    link: "https://weather-app-lilac-zeta-45.vercel.app",
    github: "https://github.com/FrM-bot/weather-app",
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678314756/portfolio/fuo0c00bd3hdac3vrihe.png",
  },
  {
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678378835/portfolio/muyikihebuiobed6gywu.png",
    title: "Wiki Dogs",
    link: "https://pi-dogs-client.vercel.app",
    techs: ["React", "Express", "Sequalize", "PostgreSQL"],
    github: "https://github.com/FrM-bot/Pi-Dogs-Client",
  },
  {
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678378738/portfolio/k5qsgqzrdf3efuknkd2f.png",
    title: "Wallet",
    link: "https://henry-pf-client.vercel.app",
    techs: [
      "React",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Firebase",
      "JWT",
      "Tailwind",
    ],
    github: "https://github.com/facuperezbri/henry-pf-client",
  },
  {
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678378654/portfolio/jv47uvtl1bhlklypophp.png",
    title: "Wiki anime",
    link: "https://wiki-anime-frm-bot.vercel.app",
    techs: ["SvelteKit", "Tailwind", "TypeScript"],
    github: "https://github.com/FrM-bot/anime-app",
    highlight: true,
    description: 'Wiki where you can find enormous sort of data of your favorites anime and manga.'
  },
  {
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678386163/portfolio/mkawwtw4jddwbjnmspoh.png",
    title: "Music Downloader",
    link: "https://music-downloader.onrender.com",
    techs: ["React", "Tailwind", "Esbuild"],
    github: "https://github.com/FrM-bot/music-downloader",
    description: 'Add where you can download audio .mp3 from youtube with the url.'
  },
  {
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678315586/portfolio/qx6n1m0cgkfqbvxpvyvc.png",
    title: "Password Generator",
    link: "https://password-generator-o6yz.onrender.com",
    techs: [
      "React",
      "Tailwind",
      "Vitest",
      "Playwright",
      "Github Actions",
      "TypeScript",
    ],
    github: "https://github.com/FrM-bot/password-generator",
  },
  {
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678378419/portfolio/qvflbdlqua5ltlubf6ib.png",
    title: "AI Image Generator",
    link: "https://ai-image-generation-jhrg.vercel.app",
    techs: [
      "Next.JS",
      "Tailwind",
      "OpenAI API",
      "TypeScript",
      "Prisma",
      "MongoDB",
    ],
    github: "https://github.com/FrM-bot/AI-Image-Generation",
  },
  {
    image:
      "https://res.cloudinary.com/dxkry5nri/image/upload/f_webp/w_720/v1678384714/portfolio/nzdqi7cmcigrzvfpkefm.png",
    title: "Image Editor",
    link: "https://svelte-cloudinary-app-guif.vercel.app",
    techs: ["SvelteKit", "Tailwind", "TypeScript"],
    github: "https://github.com/FrM-bot/svelte-cloudinary-app",
    description: 'Simple image editor where you can apply various type of filters and optimizations.'
  }
]

export default projects
