import bgImage from "../assets/ChatGPT Image May 4, 2026, 11_17_32 AM.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className=" bg-cover h-screen bg-center pt-8 w-full flex justify-between flex-col" style={{ backgroundImage: `url(${bgImage})` }}>
        <img className="w-16 ml-9" src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
        <div className='bg-white py-5 px-5 pb-7'>
            <h2 className="text-2xl font-bold">Get started with Uber</h2>
            <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link> 
        </div>
      </div>
    </div>
  )
}

export default Start
