
const WaittingForDriver = () => {
  return (
    <div>
       <h5 className="p-3 text-center w-[93%] absolute top-0" onClick={()=>{
         
          }}><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>

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
            </div>
    </div>
  )
}

export default WaittingForDriver
