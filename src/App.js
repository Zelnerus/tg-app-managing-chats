import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { useTelegramWebApp } from 'react-telegram-webapp';
import { useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./pages/Dialog";

function App() {
  const webApp = useTelegramWebApp();

  useEffect(() => {
    webApp?.ready()
  }, [])

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <Button>test it</Button>*/}
      {/*</header>*/}
        <Routes>
            <Route path="*" element={<Dialogs />} />
        </Routes>
    </div>
  );
}

export default App;
