import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card';
import { useState } from "react";
import './UserForm.css';
import { ErrorModal } from '../UI/ErrorModal';
import { Wrapper } from '../Helpers/Wrapper';

export const UserForm = props => {

    const [error, setError] = useState();
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'input error',
                message: 'Please field can be empty'
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: 'Age error',
                message: 'Age can\'t be negative number'
            });
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

    const closeModalHandler = (event) => {
        //event.preventDefault();
        console.log('Close.');
        setError(null);
    };

    return (
        <Wrapper>
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' value={username} onChange={usernameHandler}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' id='age' value={age} onChange={ageHandler}/>
                    <Button type='submit' onCloseModal={closeModalHandler}>Add User</Button>
                </form>
            </Card>
            {error && <ErrorModal title={error.title} content={error.message} onCloseModal={closeModalHandler}/>}
        </Wrapper>
    );
};