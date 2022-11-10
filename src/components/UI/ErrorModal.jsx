import { Card } from "./Card";
import { Button } from "./Button/Button";
import './ErrorModal.css';
import { Wrapper } from "../Helpers/Wrapper";
import ReactDOM from 'react-dom';


const Backdrop = props => {
  return <div className="backdrop" onClick={props.onCloseModal} />;
};

const Modal = props => {
  return <Card className="modal">
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
};

export const ErrorModal = props => {

  return <Wrapper>
            {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal title={props.title} content={props.content} onCloseModal={props.onCloseModal} />, document.getElementById('overlay-root'))}
        </Wrapper>
};