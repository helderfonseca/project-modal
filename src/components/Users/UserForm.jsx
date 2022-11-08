import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card';
import { useState } from "react";
import './UserForm.css';
import { ErrorModal } from '../UI/ErrorModal';

export const UserForm = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0) {
            return;
        }

        if (age.trim().length === 0) {
            return;
        }

        if (age < 1) {
            return;
        }

        const newUser = {
            username: username,
            age: +age
        }

        props.onAddNewUser(newUser);
        setUsername('');
        setAge('');
    };

    const usernameHandler = event => {
        setUsername(event.target.value);
    };

    const ageHandler = event => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' value={username} onChange={usernameHandler}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' id='age' value={age} onChange={ageHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
            <ErrorModal title='Error' content='Error content' />
        </div>
    );
};