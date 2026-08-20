
const ConfirmRide = () => {
  return (
    <div>
        <h5 className="p-3 text-center w-[93%] absolute top-0" onClick={()=>{
          }}><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>

          <h2 className="text-2xl font-semibold mb-4">Confirm your ride</h2>

          <div className="flex gap-2 justify-between items-center flex-col">
            <img className="h-30" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="" /> 

            <div className="w-full mt-5">
                <div className="flex items-center gap-2 p-2 border-b border-gray-200">
                    <i className=" text-lg ri-map-pin-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">kochi road,mumbai</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2 border-b border-gray-200">
                     <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">mira road,mumbai</p>
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

            <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg" >Confirm</button>
            </div>
    </div>
  )
}

export default ConfirmRide
