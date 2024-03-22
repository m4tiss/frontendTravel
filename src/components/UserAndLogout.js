import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import userImgae from "../images/UserImage.png";
import { useAuth } from '../provider/AuthProvider';

const UserAndLogout = () => {
    const { t, i18n } = useTranslation();
    const { setTokenNull } = useAuth();

    const handleLogout = () => {
        setTokenNull();
        <Navigate to = "/"/>
    };

    return (
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
            <Link to="/Account">
                <img
                    className="w-20 rounded-full shadow-2xl"
                    src={userImgae}
                    alt="User"
                />
            </Link>
            <button onClick={handleLogout} className="bg-white w-40 h-10 font-semibold text-blue-400 border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300">
                {t("navbar.logout")}
            </button>
        </div>
    );
};

export default UserAndLogout;
