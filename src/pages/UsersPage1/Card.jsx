import { RiArrowRightCircleFill } from "@remixicon/react";
import { Link } from 'react-router-dom';


const Card = ({ users }) => {
    return (
        users.map(user => {
            return (
                <div key={user.id} className="card">
                    <img src={user.avatar} alt="" />
                    <h3>{user.first_name} {user.last_name}</h3>
                    <button><Link to={`/User/${user.id}`} className="linkText"><RiArrowRightCircleFill
                        size={40}
                        color="black"
                        className="arrow"
                    /></Link></button>
                </div>
            )
        })
    )
}

export default Card