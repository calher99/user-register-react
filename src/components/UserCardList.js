import UserCard from "./UserCard";


const UserCardList = props => {
   
    return (
        <div>
            {props.userList.map(user => {
                return(<UserCard 
                        key={user.id}
                        name={user.name}
                        age={user.age}
                        />)
            })}
        </div>
    );
}

export default UserCardList;