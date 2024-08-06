import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import UserCard from "./userCard";


const UserPage = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://reqres.in/api/users/${id}`);
            const data = await response.json();
            const userData = await data.data;
            setUser(userData);
            setLoading(false)
        }
        fetchUser();
    })

    if (!loading) {
        return (
            <div className="userContainer">
                <h1>User details</h1>
                <UserCard user={user} />
            </div>
        )
    }

}


export default UserPage;