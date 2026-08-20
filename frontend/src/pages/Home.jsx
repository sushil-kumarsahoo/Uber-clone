import { useState, useRef } from "react";
import bgImage from "../assets/ChatGPT Image May 13, 2026, 06_04_54 PM.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: "1",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen],
  );

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[vehiclePanelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 p-1 mb-10 absolute left-5 top-5"
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt=""
      />

      <div className="h-screen w-screen ">
        <img
          className="h-full w-full object-cover"
          src={bgImage}
          alt="background"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute bottom-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            ref={panelCloseRef}
            className="absolute top-6 right-6 text-2xl opacity-0"
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-15 w-1 top-[40%] left-10 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="add a pickup location"
              required
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="enter your destination"
              required
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>

        <div
          ref={vehiclePanelRef}
          className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 w-full"
        >
          <h5 className="p-3 text-center w-[93%] absolute top-0" onClick={()=>{
            setVehiclePanelOpen(false)
          }}><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>

          <h2 className="text-2xl font-semibold mb-4">Choose a Vehicle</h2>

          <div className="mb-2 border-2 border-gray-50 active:border-black rounded-xl p-3 w-full flex items-center justify-between">
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

          <div className="mb-2 border-2 border-gray-50 active:border-black rounded-xl p-3 w-full flex items-center justify-between">
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

          <div className="mb-2 border-2 border-gray-50  active:border-black rounded-xl p-3 w-full flex items-center justify-between ">
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
      </div>
    </div>
  );
};

export default Home;
