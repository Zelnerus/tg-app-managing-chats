import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { useTelegramWebApp } from 'react-telegram-webapp';
import { useEffect } from 'react';

function App() {
  const webApp = useTelegramWebApp();

  useEffect(() => {
    webApp?.ready()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Button>test it</Button>
      </header>
    </div>
  );
}

export default App;
