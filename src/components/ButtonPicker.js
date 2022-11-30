import "../scss/buttonPicker.scss"
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';

const ButtonPicker = (props) => {
  return (
    <>
      <div className="button-group">
        <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => props.userInput(0)}>Zero</Button>
          <Button onClick={() => props.userInput(10)}>One</Button>
          <Button onClick={() => props.userInput(20)}>Two</Button>
          <Button onClick={() => props.userInput(30)}>Three</Button>
          <Button onClick={() => props.userInput(40)}>Four</Button>
          <Button onClick={() => props.userInput(50)}>Five</Button>
        </ButtonGroup>
      </div>
      <div className="button-group">
        <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => props.userInput(60)}>Six</Button>
          <Button onClick={() => props.userInput(70)}>Seven</Button>
          <Button onClick={() => props.userInput(80)}>Eight</Button>
          <Button onClick={() => props.userInput(90)}>Nine</Button>
          <Button onClick={() => props.userInput(100)}>Ten</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default ButtonPicker
