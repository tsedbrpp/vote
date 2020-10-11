import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./components/graph";
import Selector from "./components/MultiSelect";
import data from "./components/counties.json";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function App() {

    const [selected, setSelected] = useState([]);
    const [cat, setCat] = useState("MF");
  return (
    <div className="App">

      <div id="container">
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button  onClick={() => setCat("DR")}>
            by Party
          </Button>
          <Button  onClick={() => setCat("MF")}>
             by Gender
          </Button>
              <Button  onClick={() => setCat("RA")}>
                  by Race
              </Button>
          </ButtonGroup>

          <div>
          <Selector selected = {selected} setSelected = {setSelected}></Selector></div>
          <div>
     <Example selected={selected} cat={cat}></Example></div>
      </div>
    </div>
  );
}

export default App;
