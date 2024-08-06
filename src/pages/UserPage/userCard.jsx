import './userPage.css'

const UserCard = ({ user }) => {
    return (
        <div className="userCard">
            <img src={user.avatar} alt="" />
            <div className="details">
                <h3>Name: {user.first_name} {user.last_name}</h3>
                <p>Email: {user.email}</p>
            </div>
        </div>
    )
}

export default UserCard;