
const VehiclePanel = (props) => {
  return (
    <div>
       <h5 className="p-3 text-center w-[93%] absolute top-0" onClick={()=>{
            props.setVehiclePanelOpen(false)
          }}><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>

          <h2 className="text-2xl font-semibold mb-4">Choose a Vehicle</h2>

          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className="mb-2 border-2 border-gray-50 active:border-black rounded-xl p-3 w-full flex items-center justify-between">
            <img
              className="h-20"
              src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"
              alt="background"
            />
            <div className=" ml-2 w-1/2">
              <h4 className="font-medium text-base">
                UberGo{" "}
                <span>
                  <i className="ri-user-3-fill"></i>4
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-medium text-xs text-gray-600">
                Affordable, Compact rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹193.20</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className="mb-2 border-2 border-gray-50 active:border-black rounded-xl p-3 w-full flex items-center justify-between">
            <img
              className="h-15 w-24 -ml-3"
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n"
              alt="background"
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">
                Moto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>1
                </span>
              </h4>
              <h5 className="font-medium text-sm">3 mins away</h5>
              <p className="font-medium text-xs text-gray-600">
                Affordable, Motorcycle rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹165.00</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className="mb-2 border-2 border-gray-50  active:border-black rounded-xl p-3 w-full flex items-center justify-between ">
            <img
              className="h-20"
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn"
              alt="background"
            />
            <div className=" -ml-1 w-1/2">
              <h4 className="font-medium text-base">
                Moto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm">5 mins away</h5>
              <p className="font-medium text-xs text-gray-600">
                Affordable, Auto rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹118.00</h2>
          </div>
    </div>
  )
}

export default VehiclePanel
