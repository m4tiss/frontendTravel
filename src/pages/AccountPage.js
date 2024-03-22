import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../config/axios"



const AccountPage = () => {

    const [user,setUser] = useState();
  
    useEffect(() => {
        axios.get("/getUser").then((res) => {
          const user = res.data;
          setUser(user);
        });
      }, []);

        if (user && user.role === 'ADMIN') {
        return <Navigate to="/AccountAdmin" />;
      }
      else if(user && user.role === 'USER'){
        return <Navigate to="/AccountUser" />;
      }

    return null;
};

export default AccountPage;
