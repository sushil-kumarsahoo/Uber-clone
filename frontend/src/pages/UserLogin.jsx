import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userData, setUserData] = useState({});


  const submitHandler = (e) => {
  e.preventDefault();
  setUserData({
    email: email,
    password: password
  })
  
  setEmail('')
  setPassword('')
}
  return (
    <div className="p-4 h-screen flex flex-col justify-between">
      <div>
         <img className="w-16 p-1 mb-10" src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
      <form onSubmit={submitHandler}>
        <h3 className="text-base font-medium mb-2">Whats your email</h3>
        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="email" placeholder="email@example.com" required value={email} 
        onChange={(e)=>{
        setEmail(e.target.value);

        }}/>

        <h3 className="text-base font-medium mb-2">Enter password</h3>
        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="password" placeholder="password" required value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
      </form>
       <p className="text-center">New here? <Link to='/signup' className="mb-3 text-blue-600 underline">Create new Account</Link> </p>
      </div>
      <div>
       <Link to='/captain-Login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link> 
      </div>
    </div>
  );
};

export default UserLogin;
