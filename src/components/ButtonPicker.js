import "../scss/buttonPicker.scss";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";

const ButtonPicker = (props) => {
  function buttonClicked(e) {
    props.playlist();
    e.preventDefault();
  }

  return (
    <>
      <div className="button-group">
        <ButtonGroup
          fullWidth={true}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={(e) => {
              props.userInput(0);
              buttonClicked(e);
            }}
          >
            Zero😫
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(10);
            }}
          >
            One😓
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(20);
            }}
          >
            Two😔
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(30);
            }}
          >
            Three☹️
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(40);
            }}
          >
            Four😥
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(50);
            }}
          >
            Five😐
          </Button>
        </ButtonGroup>
      </div>
      <div className="button-group">
        <ButtonGroup
          fullWidth={true}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(60);
            }}
          >
            Six😅
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(70);
            }}
          >
            Seven😊
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(80);
            }}
          >
            Eight😃
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(90);
            }}
          >
            Nine😄
          </Button>
          <Button
            onClick={(e) => {
              buttonClicked(e);
              props.userInput(100);
            }}
          >
            Ten😆
          </Button>
        </ButtonGroup>
      </div>
      {/* <Button
        onClick={(e) => {
          buttonClicked(e);
          props.shuffle();
        }}
      >
        Shuffle!
      </Button> */}
    </>
  );
};

export default ButtonPicker;
