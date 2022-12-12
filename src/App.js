import "./scss/App.scss";
import { useEffect, useState } from "react";
import gloomIndex from "./gloomIndex";
import PlaylistPicker from "./components/PlaylistPicker";
import ButtonPicker from "./components/ButtonPicker";
import * as React from "react";

const radiohead = gloomIndex.radiohead;
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

function App() {
  const [userInput, setUserInput] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  const userChoice = range(userInput - 10, userInput + 10, 1);
  const newPlaylist = radiohead.filter((song) =>
    userChoice.includes(Math.round(song.gloom_index))
  );

  function shuffle() {
    const shuffledPlaylist = currentPlaylist.sort(() => Math.random() - 0.5);
    setCurrentPlaylist(shuffledPlaylist);
  }

  useEffect(() => {
    setCurrentPlaylist(newPlaylist);
  }, [userInput]);

  return (
    <div className="App">
      <h1>Radiohead Gloom Index</h1>
      <h2>On a scale of 😫0 - 10😆, how are you feeling today?</h2>
      <ButtonPicker
        userInput={setUserInput}
        array={currentPlaylist}
        shuffle={shuffle}
      />
      <PlaylistPicker array={currentPlaylist} />
    </div>
  );
}

export default App;
