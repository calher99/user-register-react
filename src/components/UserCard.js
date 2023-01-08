

const UserCard = props => {

    const text = props.name + " "+  props.age.toString() + " years old";

    return (
        <div>
            {text}
        </div>
    );
}

export default UserCard;