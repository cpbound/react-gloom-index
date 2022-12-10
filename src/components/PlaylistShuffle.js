import "../scss/buttonPicker.scss";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";

const PlaylistShuffle = (props) => {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array;
    }
  }
  return <Button onClick={console.log(shuffle(props.playlist))}>Shuffle!</Button>;
};

export default PlaylistShuffle;
