import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import MainPage from './pages/MainPage.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainPage></MainPage>
    </>
  );
}

export default App;
