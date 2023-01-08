import { useState } from 'react';
import './UserForm.css'

const UserForm = props => {
    let [age, setAge] = useState("")
    let [userName, setUserName] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            id: Math.random(),
            name: userName,
            age
        }

        props.onSubmitForm(userData);

        setUserName('');
        setAge('')
    }
    const changeNameHandler = (e) => {
        setUserName(e.target.value)
    }
    const changeAgeHandler = (e) => {
        setAge(e.target.value)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username</label>
                    <input type='text' onChange={changeNameHandler} value={userName}/>
                </div>
                <div>
                    <label>Age(years)</label>
                    <input type='number' onChange={changeAgeHandler} value={age}/>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default UserForm;