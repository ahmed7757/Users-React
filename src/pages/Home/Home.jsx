import './home.css';
import { Link } from 'react-router-dom';
import image from '../../assets/images/usersImage.jpg';

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className="textContainer">
                <h1>Users Site</h1>
                <p>This is a users site, lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ipsam perspiciatis veniam pariatur.</p>
                <button><Link className='btnText' to={"/UsersPage1"}>Users page</Link></button>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

export default Home;