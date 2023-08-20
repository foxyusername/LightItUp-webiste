import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import Loading from '../src/Loading';

function Middleware({get}) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null as initial value for loading state

  useEffect(() => {
    axios.get('https://lightitupapi.onrender.com/isAuth',{
      withCredentials:true,
    }).then((res) => {
        console.log(res.data);
        if(res.data===true){
          setIsAuthenticated(res.data === true);
        }else{
          setIsAuthenticated(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (isAuthenticated === null) {
    // Loading state while waiting for authentication check
    return <Loading />
  }

  return isAuthenticated ? <Navigate to={"/Shop"} /> : <Outlet />
}

export default Middleware;
