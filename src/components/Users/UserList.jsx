import {UserItem} from "./UserItem";
import './UserList.css';

export const UserList = props => {

    if (props.users.length === 0) {
        return <p>No data found!</p>
    }

    return (
            <ul>
                {props.users.map(user =>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        age={user.age} />
                )}
            </ul>
    );
};