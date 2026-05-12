import { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useContext } from "react";

const CaptainSignup = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstname,setFirstname] = useState('');
  const [laststname,setLastname] = useState('');
  const [vehicleColor,setVehicleColor] = useState('');
  const [vehiclePlate,setVehiclePlate] = useState('');
  const [vehicleCapacity,setVehicleCapacity] = useState('');
  const [vehicleType,setVehicleType] = useState('');



  const { captain, setCaptain } = useContext(CaptainDataContext)

 const submitHandler = (e) => {
  e.preventDefault();
  
  setEmail('')
  setPassword('')
  setFirstname('')
  setLastname('')
}

  return (
    <div className="p-4 h-screen flex flex-col justify-between">
      <div>
         <img className="w-16 p-1 mb-10" src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
      <form onSubmit={submitHandler}>
        <h3 className="text-base font-medium mb-2">Whats your name</h3>
       <div className="flex gap-2 mb-5">
         <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" type="text" placeholder="Firstname" required value={firstname}
         onChange={(e)=>{
          setFirstname(e.target.value)
         }}/>

         <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" type="text" placeholder="Lastname" required value={laststname}
         onChange={(e)=>{
          setLastname(e.target.value)
         }}/>

       </div>
        <h3 className="text-base font-medium mb-2">Whats your email</h3>
        <input className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="email" placeholder="email@example.com" required value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}/>

        <h3 className="text-base font-medium mb-2">Enter password</h3>
        <input className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="password" placeholder="password" required value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
         }}/>

        <h3 className="text-base font-medium mb-2">Vehicle information</h3>
        <div className="flex gap-2 mb-5">
          <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" type="password" placeholder="vehicle color" required value={vehicleColor}
         onChange={(e)=>{
          setVehicleColor(e.target.value)
         }}/>
          <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" type="password" placeholder="vehicle plate" required value={vehiclePlate}
         onChange={(e)=>{
          setVehiclePlate(e.target.value)
         }}/>
        </div>
        <div className="flex mb-5 gap-2">
          <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" type="password" placeholder="vehicle capacity" required value={vehicleCapacity}
         onChange={(e)=>{
          setVehicleCapacity(e.target.value)
         }}/>

          <select required className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm" value={vehicleType} onChange={(e)=>{
              setVehicleType(e.target.value)
          }}>
           <option value="" disabled>Select Vehicle type</option>
           <option value="car">Car</option>
           <option value="auto">Auto</option>
           <option value="moto">Moto</option>

          </select>
        </div>
        

        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-sm">Create Captain Account</button>
      </form>
       <p className="text-center">Already have an account? <Link to='/captain-login' className="mb-3 text-blue-600 underline">Login here</Link> </p>
      </div>
       <div className="text-xs text-gray-500">
        <p>
          This site is protected by reCAPTCHA and the Google <span
          className="underline text-black">Privacy Policy</span> and <span className="underline text-black">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup
