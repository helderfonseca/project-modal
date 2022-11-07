import {UserItem} from "./UserItem";

export const UserList = props => {
    return (
            <ul>
                {props.users.map(user =>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        age={user.age} />
                )}
            </ul>
    );
};