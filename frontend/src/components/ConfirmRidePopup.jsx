import { Link } from "react-router-dom"

const ConfirmRidePopup = (props) => {
  return (
     <div>
      <h5 className="p-3 text-center w-[93%] absolute top-0" onClick={() => {
        props.setConfirmRidePopupPanel(false)
      }}><i className="text-3xl text-gray-400 ri-arrow-down-s-line"></i></h5>

      <h2 className="text-2xl font-semibold mb-4">Confirm this ride to start</h2>

      <div className="flex items-center justify-between mt-3 p-3 bg-gray-200 rounded-xl">
        <div className="flex items-center gap-3 text-lg font-medium">
          <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5TGfozDvDJg6shlLGnB4vVStEtsdgjqsSLWcH0q8xySETLF50Pp5385tq&s=10" alt="" />
          <h2>Sushil sahoo</h2>
        </div>
        <h5 className="font-semibold">2.5 Km</h5>

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
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <Link to={'/captain-riding'} className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg" >Confirm Ride</Link>

        <button onClick={() => {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
        }} className="w-full mt-1 bg-red-700 font-semibold p-3 rounded-lg text-white" >Cancel Ride</button>
      </div>
    </div>
  )
}

export default ConfirmRidePopup
