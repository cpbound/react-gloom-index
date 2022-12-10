import "./scss/App.scss";
import { useState } from "react";
import gloomIndex from "./gloomIndex";
import PlaylistPicker from "./components/PlaylistPicker";
import ButtonPicker from "./components/ButtonPicker";
import PlaylistShuffle from "./components/PlaylistShuffle";
import * as React from "react";

const radiohead = gloomIndex.radiohead;
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

function App() {
  const [userInput, setUserInput] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  const newPlaylist = () => {
    if (!userInput) {
      console.log("Hello world")
      console.log(userInput)
    } else {
      console.log("get fucked four eyes")
    }
  //   const userChoice = range(userInput - 10, userInput + 10, 1);
  //   const newPlaylist = radiohead.filter((song) =>
  //     userChoice.includes(Math.round(song.gloom_index))
  //   );
  //   return setCurrentPlaylist(newPlaylist);
  };

  newPlaylist()

  console.log(userInput)
  console.log(currentPlaylist)

  return (
    <div className="App">
      <h1>Radiohead Gloom Index</h1>
      <h2>On a scale of 1 - 10, how are you feeling today?</h2>
      <ButtonPicker userInput={setUserInput} />
      <PlaylistShuffle playlist={currentPlaylist} />
      <PlaylistPicker array={currentPlaylist} />
    </div>
  );
}

export default App;
