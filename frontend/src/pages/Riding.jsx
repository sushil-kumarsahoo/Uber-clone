import bgImage from "../assets/ChatGPT Image May 13, 2026, 06_04_54 PM.png"
import { Link } from "react-router-dom"

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to={'/home'} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-4-line"></i>
        </Link>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={bgImage} alt="" />
      </div>
      <div className="h-1/2 p-4">
       <div className="flex items-center justify-between ">
             <img className="h-25" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="" /> 
             <div className="text-right">
              <h2 className="text-lg font-medium ">Sushil</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">OD22 56 78</h4>
              <p className="text-sm text-gray-600">Swift Dezire</p>
             </div>

         </div>

          <div className="flex gap-2 justify-between items-center flex-col">
            <div className="w-full mt-5">
                <div className="flex items-center gap-2 p-2 border-b border-gray-200">
                    <i className=" text-lg ri-map-pin-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">kochi road,mumbai</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 p-2">
                     <i className="text-lg ri-cash-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">Cash cash</p>
                    </div>
                </div>
            </div>
            </div>
           <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button>
      </div>
    </div>
  )
}

export default Riding
