import {React,useEffect,useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import userImage from "../images/UserImage.png";
import adminImage from "../images/AdminImage.png"
import { useAuth } from '../provider/AuthProvider';
import axios from "../config/axios";

const UserAndLogout = () => {
    const { t, i18n } = useTranslation();
    const { setTokenNull,token } = useAuth();
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
    

    const handleLogout = () => {
        setTokenNull();
        <Navigate to = "/"/>
    };

    return (
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
            <Link to="/Account">
            {user && user.role === 'ADMIN' ? (
                <Link to="/Account">
                    <img
                        src={adminImage}
                        alt="Admin Avatar"
                        className="w-20 rounded-full shadow-2xl"
                    />
                </Link>
            ) : (
                <Link to="/Account">
                    {user && user.userImage ? (
                        <img
                            src={`${process.env.REACT_APP_IMAGES_URL}usersImages/${user.userImage}`}
                            alt="User Avatar"
                            className="w-20 rounded-full shadow-2xl"
                        />
                    ) : (
                        <img
                            src={userImage} 
                            alt="Default User Avatar"
                            className="w-20 rounded-full shadow-2xl"
                        />
                    )}
                </Link>
            )}
            </Link>
            <button onClick={handleLogout} className="bg-white w-40 h-10 font-semibold text-blue-400 border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300">
                {t("navbar.logout")}
            </button>
        </div>
    );
};

export default UserAndLogout;
