import './App.css';
import { useState } from 'react';
import gloomIndex from "./gloomIndex"
import PlaylistPicker from "./components/PlaylistPicker"
import ButtonPicker from "./components/ButtonPicker"


import * as React from 'react';

const radiohead = gloomIndex.radiohead
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

function App() {

  const [userInput, setUserInput] = useState(0);

  const newPlaylist = () => {
    const userChoice = range(userInput - 10, userInput + 10, 1)
    const newPlaylist = radiohead.filter(song => userChoice.includes(Math.round(song.gloom_index)))
    return (
      newPlaylist
    )
  }

  return (
    <div className="App">
      <h1>Radiohead Gloom Index</h1>
      <ButtonPicker userInput={setUserInput} />
      <PlaylistPicker array={newPlaylist()} />
    </div>
  );
}

export default App;
