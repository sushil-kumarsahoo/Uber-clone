import bgImage from "../assets/ChatGPT Image May 13, 2026, 06_04_54 PM.png";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt=""
        />
        <Link
          to={""}
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img className="h-full w-full object-cover" src={bgImage} alt="" />
      </div>
      <div className="h-2/5 p-6">
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
    </div>
  );
};

export default CaptainHome;

6.2;
