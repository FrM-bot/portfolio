type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "damianmaciel0@gmail.com",
  title: "Maciel Franco",
  profile: "https://avatars.githubusercontent.com/u/82059717?v=4",
  description:
    "*Fullstack developer* with over *2 years* of web experience, focused on create high quality web products and solutions. I am currently working with *Next.JS*, *Astro*, *SveltKit* and *TypeSript*.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/frm-bot",
    },
    {
      label: "Github",
      link: "https://github.com/FrM-bot",
    },
  ],
};

export default presentation;
