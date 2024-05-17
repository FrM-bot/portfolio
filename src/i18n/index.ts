import Spanish from './es.json'
import English from './en.json'

export const Languages = {
  SPANISH: 'es',
  ENGLISH: 'en',
} as const

export const getI18n = ({ lang }: { lang: string }) => {
  if (lang === Languages.SPANISH) return Spanish
  if (lang === Languages.ENGLISH) return English
  return English
}
