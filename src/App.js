import './App.css';
import { useState } from 'react';
import gloomIndex from "./gloomIndex"

import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';

const radiohead = gloomIndex.radiohead
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

function App() {

  const [userInput, setUserInput] = useState(0);

  const PlaylistPicker = () => {
    const userChoice = range(userInput - 10, userInput + 10, 1)
    const res = radiohead.filter(song => userChoice.includes(Math.round(song.gloom_index)))
    return (
      <>
        {res.map(song =>
          <>
            <p>{song.track_name}</p>
            <img width={"150px"} src={song.album_img} />
          </>
        )}
      </>
    )
  }

  PlaylistPicker()

  return (
    <div className="App">
      <h1>Radiohead Gloom Index</h1>
      <div>
        <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => setUserInput(10)}>One</Button>
          <Button onClick={() => setUserInput(20)}>Two</Button>
          <Button onClick={() => setUserInput(30)}>Three</Button>
          <Button onClick={() => setUserInput(40)}>Four</Button>
          <Button onClick={() => setUserInput(50)}>Five</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => setUserInput(60)}>Six</Button>
          <Button onClick={() => setUserInput(70)}>Seven</Button>
          <Button onClick={() => setUserInput(80)}>Eight</Button>
          <Button onClick={() => setUserInput(90)}>Nine</Button>
          <Button onClick={() => setUserInput(100)}>Ten</Button>
        </ButtonGroup>
      </div>
      <PlaylistPicker />
    </div>
  );
}

export default App;
