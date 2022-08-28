import {useTelegramWebApp} from 'react-telegram-webapp';
import {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {Dialogs} from "./pages/Dialogs";
import {Dialog} from "./pages/Dialog";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function App() {
    const location = useLocation();
    const webApp = useTelegramWebApp();

    useEffect(() => {
        webApp?.ready()
    }, [])

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <Button>test it</Button>*/}
            {/*</header>*/}
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Routes>
                        <Route path="/dialog/:id" element={<Dialog/>}/>
                        <Route path="*" element={<Dialogs/>}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
