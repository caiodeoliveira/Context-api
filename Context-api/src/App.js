import './App.css';
import ComponenteFilho from './components/ComponenteFilho';
import { useToogle } from './contexts/ToggleProvider'

function App() {
  const { estadoPai, handleClickEstadoPai } = useToogle()
  return (
    <div>
      <div>
        <h1>Componente Pai</h1>
        <button onClick={handleClickEstadoPai}>Clique aqui</button>
        {estadoPai&&<p>aberto</p>}
        <ComponenteFilho />
      </div>
    </div>
  );
}

export default App;