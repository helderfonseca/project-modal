import { Card } from "./Card";
import { Button } from "./Button/Button";

export const ErrorModal = props => {
  return <Card>
      <header>
        <h2>Title</h2>
      </header>
      <div>
        <p>Content</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
  </Card>
};