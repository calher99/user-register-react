import Card from "./UI/Card";
import UserCard from "./UserCard";


const UserCardList = props => {
   
    return (
        <Card className = 'userList'>
            {props.userList.map(user => {
                return(<UserCard 
                        key={user.id}
                        name={user.name}
                        age={user.age}
                        />)
            })}
        </Card>
    );
}

export default UserCardList;