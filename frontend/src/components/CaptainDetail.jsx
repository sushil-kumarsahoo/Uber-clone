

const CaptainDetail = () => {
  return (
    <div>
       <div className="flex items-center justify-between">
          <div className="flex ite justify-start gap-4">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1O__BhAqnmH8mYeeBakpmI0BXy0nEGaZlEoP-evyHOg&s"
              alt=""
            />
            <h4 className="text-lg font-medium">Sushil</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹295.2</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex mt-8 p-3 bg-gray-200 rounded-full justify-center gap-5 items-start">
          <div className="text-center ">
            <i className="text-3xl mb-2 font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-sticky-note-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetail
