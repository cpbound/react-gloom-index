import "./scss/App.scss";
import { useEffect, useState } from "react";
import gloomIndex from "./gloomIndex";
import PlaylistPicker from "./components/PlaylistPicker";
import ButtonPicker from "./components/ButtonPicker";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CottageIcon from '@mui/icons-material/Cottage';
import GitHubIcon from "@mui/icons-material/GitHub";
import AttributionIcon from '@mui/icons-material/Attribution';

const radiohead = gloomIndex.radiohead;
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

function App() {
  const [userInput, setUserInput] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  const playlist = () => {
    const userChoice = range(userInput - 10, userInput + 10, 1);
    const newPlaylist = radiohead.filter((song) =>
      userChoice.includes(Math.round(song.gloom_index))
    );
    newPlaylist.sort();
    setCurrentPlaylist(newPlaylist);
  };

  useEffect(() => {
    playlist();
  },);

  return (
    <div className="App">
      <h1>Radiohead Gloom Index</h1>
      <h2>On a scale of 😫0 - 10😆, how are you feeling today?</h2>
      <h3>Created using data from <a href="https://www.rcharlie.com/images/blog/fitter-happier/album_chart.html">here.</a> Read more about it <a href="https://www.rcharlie.com/blog/fitter-happier/">here.</a></h3>
      <ButtonPicker
        userInput={setUserInput}
        array={currentPlaylist}
        playlist={playlist}
      />
      <PlaylistPicker array={currentPlaylist} />
      <BottomNavigation
        sx={{backgroundColor: "whitesmoke", position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={1}
        showLabels
      >
        <BottomNavigationAction label="Project Github" icon={<GitHubIcon />} href="https://github.com/cpbound/react-gloom-index" />
        <BottomNavigationAction label="My Homepage" icon={<CottageIcon />} href="https://crsbnd.netlify.app/" />
        <BottomNavigationAction label="2022 Chris Bound" icon={<AttributionIcon />} href="https://github.com/cpbound" />
      </BottomNavigation>
    </div>
  );
}

export default App;
