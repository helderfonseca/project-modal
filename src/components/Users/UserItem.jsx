
import './UserItem.css';

export const UserItem = props => {
    return (
            <li>
                <span style={{display: 'none'}}>{props.id}</span> 
                {` ${props.username} ${props.age} years old.`}
            </li>
    );
};