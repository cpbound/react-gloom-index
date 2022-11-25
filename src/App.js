import './App.css';
import gloomIndex from "./gloomIndex"

import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';

console.log(gloomIndex)

const PlaylistPicker = () => {
  console.log("Hello world")
  const range = Array.from({length: 10}, (_, i) => i + 1)
  console.log(range)
}

PlaylistPicker()

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
          <Button>Five</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
          <Button>Six</Button>
          <Button>Seven</Button>
          <Button>Eight</Button>
          <Button>Nine</Button>
          <Button>Ten</Button>
        </ButtonGroup>
      </div>

    </div>
  );
}

export default App;
