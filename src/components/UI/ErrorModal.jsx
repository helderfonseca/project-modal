import { Card } from "./Card";
import { Button } from "./Button/Button";
import './ErrorModal.css';
import { Wrapper } from "../Helpers/Wrapper";

export const ErrorModal = props => {

  return <Wrapper>
          <div className="backdrop" onClick={props.onCloseModal}/>
          <Card className="modal">
            <header className="header">
              <h2>{props.title}</h2>
            </header>
            <div className="content">
              <p>{props.content}</p>
            </div>
            <footer className="actions">
              <Button onClick={props.onCloseModal}>Okay</Button>
            </footer>
          </Card>
        </Wrapper>
};