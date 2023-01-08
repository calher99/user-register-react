import './UserForm.css'

const UserForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Age(years)</label>
                    <input type='number'/>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default UserForm;