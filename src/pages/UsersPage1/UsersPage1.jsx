import './usersPage1.css';
import getUsers1 from '../../data/getUsers1';
import Card from './Card';
import { Link } from 'react-router-dom';
import { } from "@remixicon/react";


const UsersPage1 = () => {
    const users = getUsers1();
    return (
        <div className='cardsContainer'>
            <h1>Users </h1>
            <div className="cards">
                <Card users={users} />
            </div>
            <button className='nextBtn'><Link to={"/UserPage2"} className='nextBtnText'>Next page</Link></button>
        </div>
    )
}

export default UsersPage1;