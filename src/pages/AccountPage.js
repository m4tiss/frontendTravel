import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../config/axios";
import { useAuth } from "../provider/AuthProvider";

const AccountPage = () => {
    const { token } = useAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/getUser", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const userData = response.data;
                setUser(userData);
            } catch (error) {
                console.error("Błąd podczas pobierania danych użytkownika:", error);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (user && user.role === 'ADMIN') {
        return <Navigate to="/AccountAdmin" />;
    } else if (user && user.role === 'USER') {
        return <Navigate to="/AccountUser" />;
    }

    return null;
};

export default AccountPage;
