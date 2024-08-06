import { useState, useEffect } from "react";

const getUsers2 = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://reqres.in/api/users?page=2');
            const data = await response.json();
            const users = data.data;
            setUsers(users);
        }
        fetchUsers();
    }, []);
    return users;
}

export default getUsers2;