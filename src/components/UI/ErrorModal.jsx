import { Card } from "./Card";
import { Button } from "./Button/Button";
import './ErrorModal.css';

export const ErrorModal = props => {

  return <>
          <div className="backdrop"></div>
          <Card className="modal">
            <header className="header">
              <h2>{props.title}</h2>
            </header>
            <div className="content">
              <p>{props.content}</p>
            </div>
            <footer className="actions">
              <Button>Okay</Button>
            </footer>
          </Card>
        </>
};