import { UserForm } from './UserForm';
import './AddUser';

export const AddUser = props => {

    const newUserHandler = newUser => {
        const user = {
            id: Math.random().toString(),
            ...newUser
        }
        props.addNewUser(user);
    };

    return (
            <div className='add-section'>
                <UserForm onAddNewUser={newUserHandler} />
            </div>
    );
};