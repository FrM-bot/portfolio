import type { TailwindColor } from "@/types/tailwind"

type Theme = {
  colors: {
    primary: TailwindColor
    blur: {
      top: TailwindColor
      bottom: TailwindColor
    }
  }
}

const theme: Theme = {
  colors: {
    primary: "teal",
    blur: {
      top: "teal",
      bottom: "pink",
    },
  },
}

export default theme
