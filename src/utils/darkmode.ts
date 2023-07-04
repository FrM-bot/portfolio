export const setDarkTheme = (value: boolean) => {
  if (value) {
      document.documentElement.setAttribute("data-theme", "dark")
  }
  if (!value) {
      document.documentElement.setAttribute("data-theme", "ligth")
  }
}