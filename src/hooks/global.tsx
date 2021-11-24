import { createContext, ReactElement, useContext, useEffect, useState } from 'react'

type GlobalContextProviderProps = {
    children: ReactElement | ReactElement[]
}
type GlobalContextProps = {
    position: number
    updatePosition: (position: number) => void
}
export const globalContext = createContext({} as GlobalContextProps)

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps): ReactElement => {
  const [position, setPosition] = useState(0)

  function updatePosition (position: number) {
    setPosition(position)
  }

  useEffect(() => {
    function getPosition () {
      const scrool = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight
      const percent = (scrool / height) * 100
      setPosition(percent)
    }
    window.addEventListener('touchmove', getPosition)
    window.addEventListener('scrool', getPosition)
    window.addEventListener('wheel', getPosition)

    return () => {
      window.removeEventListener('touchmove', getPosition)
      window.removeEventListener('scrool', getPosition)
      window.removeEventListener('wheel', getPosition)
    }
  }, [])

  return (
    <globalContext.Provider value={{ position, updatePosition }}>
      {children}
    </globalContext.Provider>
  )
}
export const useGlobalContext = ():GlobalContextProps => {
  const context = useContext(globalContext)
  return context
}
