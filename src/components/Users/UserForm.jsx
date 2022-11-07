import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card';
import { useState } from "react";
import './UserForm.css';

export const UserForm = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);

    const addUserHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0) {
            return;
        }

        if (age.trim().length === 0) {
            return;
        }

        const newUser = {
            username: username,
            age: +age
        }

        props.onAddNewUser(newUser);
        setUsername('');
        setAge(0);
    };

    const usernameHandler = event => {
        setUsername(event.target.value);
    };

    const ageHandler = event => {
        setAge(event.target.value);
    };

    return (
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' value={username} onChange={usernameHandler}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' id='age' name='age' value={age} onChange={ageHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
    );
};