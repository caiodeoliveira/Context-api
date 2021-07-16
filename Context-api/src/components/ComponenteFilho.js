import React from 'react';
import { useToogle } from '../contexts/ToggleProvider';

// import { Container } from './styles';

function ComponenteFilho() {
  const {estadoFilho, handleClickEstadoFilho} = useToogle()

  return (
    <div>
      <h1>Componente Filho</h1>
      <button onClick={handleClickEstadoFilho}>Clique aqui</button>
      {estadoFilho&&<p>aberto</p>}
    </div>
  )
}

export default ComponenteFilho;