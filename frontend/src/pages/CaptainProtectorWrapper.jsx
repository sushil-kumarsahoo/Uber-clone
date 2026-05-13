import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectorWrapper = ({children}) => {
    const token = localStorage.getItem("captain-token");
    const navigate = useNavigate();
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const [isLoading,setIsLoading] = useState(true);

   useEffect(() => {
      if (!token) {
        navigate("/captain-login");
        return;
      }
      axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status == 200){
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    })
    .catch(err => {
        console.log(err) 
        localStorage.removeItem('captain-token')
        navigate('/captain-login')
        
    });
    }, [token]);

    if (!token) return null;

    if(isLoading){
        return <div>Loading...</div>
    }
  
    return <div>{children}</div>;
  };


export default CaptainProtectorWrapper
