import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card';
import { useRef, useState } from "react";
import './UserForm.css';
import { ErrorModal } from '../UI/ErrorModal';
import { Wrapper } from '../Helpers/Wrapper';

export const UserForm = props => {

    const [error, setError] = useState();
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const userNameRef = useRef();
    const userAgeRef = useRef();

    const addUserHandler = event => {

        const enteredName = userNameRef.current.value;
        const enteredAge = userAgeRef.current.value;

        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'input error',
                message: 'Please field can be empty'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Age error',
                message: 'Age can\'t be negative number'
            });
            return;
        }

        const newUser = {
            username: userNameRef,
            age: +userAgeRef
        }

        props.onAddNewUser(newUser);
        //setUsername('');
        //setAge('');
        userNameRef.current.value = '';
        userAgeRef.current.value = '';0
    };

    /*const usernameHandler = event => {
        setUsername(event.target.value);
    };

    const ageHandler = event => {
        setAge(event.target.value);
    };*/

    const closeModalHandler = (event) => {
        //event.preventDefault();
        //console.log('Close.');
        setError(null);
    };

    return (
        <>
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        id='username' 
                        ref={userNameRef}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        type='number' 
                        id='age' 
                        ref={userAgeRef}
                    />
                    <Button type='submit' onCloseModal={closeModalHandler}>Add User</Button>
                </form>
            </Card>
            {error && <ErrorModal title={error.title} content={error.message} onCloseModal={closeModalHandler}/>}
        </>
    );
};