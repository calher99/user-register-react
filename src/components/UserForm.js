import { useState } from 'react';
import Card from './UI/Card';
import './UserForm.css'

const UserForm = props => {
    let [age, setAge] = useState("")
    let [userName, setUserName] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();

        // check validity and if not valid we put the modal
        
        const userData = {
            id: Math.random(),
            name: userName,
            age
        }

        verifyForm(userData);

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

    const verifyForm = data => {
        if (/^[a-zA-Z ]+$/.test(data.name)){
            props.onCheckValid(true)
            return
        }else{
            props.onCheckValid(false)
        }
    }
    return (
        <Card className='userForm' >
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
        </Card>
    );
}

export default UserForm;