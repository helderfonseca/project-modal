import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card';
import './UserForm.css';

export const UserForm = props => {

    const addUserHandler = event => {
        event.preventDefault();
    };

    return (
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>username</label>
                    <input type='text' id='username' name='username' />
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' id='age' name='age' />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
    );
};