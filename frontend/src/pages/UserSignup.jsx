import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [laststName,setLastName] = useState('');
  const [userData, setUserData] = useState({});


 const submitHandler = (e) => {
  e.preventDefault();
  setUserData({
      FullName:{
        firstName:firstName,
        laststName:laststName
      },
      email:email,
      password:password,
  })
  setEmail('')
  setPassword('')
  setFirstName('')
  setLastName('')
}

  return (
    <div className="p-4 h-screen flex flex-col justify-between">
      <div>
         <img className="w-16 p-1 mb-10" src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
      <form onSubmit={submitHandler}>
        <h3 className="text-base font-medium mb-2">Whats your name</h3>
       <div className="flex gap-2 mb-7">
         <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" type="text" placeholder="Firstname" required value={firstName}
         onChange={(e)=>{
          setFirstName(e.target.value)
         }}/>

         <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" type="text" placeholder="Lastname" required value={laststName}
         onChange={(e)=>{
          setLastName(e.target.value)
         }}/>

       </div>
        <h3 className="text-base font-medium mb-2">Whats your email</h3>
        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="email" placeholder="email@example.com" required value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}/>

        <h3 className="text-base font-medium mb-2">Enter password</h3>
        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="password" placeholder="password" required value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
         }}/>
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-sm">Login</button>
      </form>
       <p className="text-center">Already have an account? <Link to='/Login' className="mb-3 text-blue-600 underline">Login here</Link> </p>
      </div>
      <div className="text-sm text-gray-500">
        <p>
          This site is protected by reCAPTCHA and the Google <span
          className="underline text-black">Privacy Policy</span> and <span className="underline text-black">Terms of Service</span> apply
        </p>
      </div>
    </div>
  );
}

export default UserSignup
