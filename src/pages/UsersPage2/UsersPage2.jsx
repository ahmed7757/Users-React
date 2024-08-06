import './usersPage2.css';
import getUsers2 from '../../data/getUsers2';
import Card2 from './Card2';
import { Link } from 'react-router-dom';
import { } from "@remixicon/react";


const UsersPage2 = () => {
    const users = getUsers2();
    return (
        <div className='cardsContainer'>
            <h1>Users </h1>
            <div className="cards">
                <Card2 users={users} />
            </div>
            <button className='nextBtn'><Link to={"/UsersPage1"} className='nextBtnText'>Brevious page</Link></button>
        </div>
    )
}

export default UsersPage2;