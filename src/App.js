import Textanalyzer from "./Textanalyzer.mjs";
import "./App.css";
import Nav from "./Nav.mjs";
import {useState} from 'react'
function App() {
  const [mavmode, setMode] = useState({
    background: 'black',
    color: 'lightgray',
  });

  const [summ, setsumm] = useState({
    background: 'gray',
    color: 'black',
  });

  const funm = () => {
    if (mavmode.background === 'black') {
      setMode({
        background: 'lightgray',
        color: 'black',
      });
      document.body.style.background="white"
      setsumm({
        background: 'white',
        color: 'black',
      });
    } else {
      setMode({
        background: 'black',
        color: 'lightgray',
      });
      document.body.style.background="darkgray"
      setsumm({
        background: 'gray',
        color: 'black',
      });
    }
  };

  return (
    <>
      <Nav ini={mavmode} cc={mavmode} fun={funm}/>
      <Textanalyzer bc={summ} />
    </>
  );
}

export default App;
