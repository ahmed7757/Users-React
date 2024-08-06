import { useState, useEffect } from "react";

const getUsers1 = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://reqres.in/api/users?page=1');
            const data = await response.json();
            const users = data.data;
            setUsers(users);
        }
        fetchUsers();
    }, []);
    return users;
}

export default getUsers1;