import './Users.css';
import {Card} from "../UI/Card";
import {UserList} from "./UserList";


export const Users = props => {
    return (
            <Card>
                <UserList users={props.users}/>
            </Card>
    );
};