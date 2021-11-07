import { createContext, ReactElement, useContext, useEffect, useState } from 'react'
import { LanguageData, Languages } from './@types'
import enUS from 'languages/en-US.json'
import ptBR from 'languages/pt-BR.json'

type LanguageContextProviderProps = {
    children: ReactElement | ReactElement[]
}
type LanguageContextProps = {
    data: LanguageData
    lang: Languages
    changeLanguage: (prop: Languages) => void
}
export const languageContext = createContext({} as LanguageContextProps)

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps): ReactElement => {
  const [data, setData] = useState<LanguageData>({} as LanguageData)
  const [lang, setLang] = useState<Languages>('en-US')
  const languages:{[key: string]: LanguageData} = {
    'en-US': enUS,
    'pt-BR': ptBR,
  }

  useEffect(() => {
    setData(languages[lang])
  }, [lang])

  function changeLanguage (lang: Languages) {
    setLang(lang)
  }

  return (
    <languageContext.Provider value={{ data, lang, changeLanguage }}>
      {children}
    </languageContext.Provider>
  )
}
export const useLanguageContext = ():LanguageContextProps => {
  const context = useContext(languageContext)
  return context
}
