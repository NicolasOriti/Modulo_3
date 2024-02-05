import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Button from './components/Button.jsx';
import './App.css';

function App() {
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button nombre={'Boton 1'} apellido={'Oriti'} >Click Me</Button>
        <Button handleClick={handleClick}>Don't Click{count}</Button>
        <Button handleClick={handleClick}>Peligro{count}</Button>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
