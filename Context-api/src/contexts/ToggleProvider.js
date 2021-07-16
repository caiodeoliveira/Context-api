import { createContext, useContext, useState } from 'react';

// import { Container } from './styles';

const ToggleContext = createContext()

function ToggleProvider({children}) {
  const [estadoPai, setEstadoPai] = useState(false)
  const [estadoFilho, setEstadoFilho] = useState(false)

  const handleClickEstadoPai = () => {
    setEstadoPai(pState => !pState)
  }

  const handleClickEstadoFilho = () => {
    setEstadoFilho(pState => !pState)
  }

  return (
    <ToggleContext.Provider value={{
      estadoPai,
      estadoFilho,
      handleClickEstadoPai,
      handleClickEstadoFilho,
    }}>
      {children}
    </ToggleContext.Provider>
  )
}

function useToogle() {
  const context = useContext(ToggleContext)
  return context
}

export {ToggleProvider, useToogle};