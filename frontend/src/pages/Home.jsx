import { useState,useRef } from "react";
import bgImage from "../assets/ChatGPT Image May 13, 2026, 06_04_54 PM.png";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen,setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
      height:'70%',
      opacity:1
    })
    gsap.to(panelCloseRef.current,{
      opacity:"1"
    })
    } else {
      gsap.to(panelRef.current,{
      height:'0%',
      opacity:0
    })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  return (
    <div className="h-screen relative">
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
        <div className="h-[30%] bg-white p-6 relative">
          <h5 ref={panelCloseRef} className="absolute top-6 right-6 text-2xl opacity-0" onClick={()=>{
            setPanelOpen(false);
          }}><i className="ri-arrow-down-s-line"></i></h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-15 w-1 top-[40%] left-10 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="add a pickup location"
              required
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={()=>{
                setPanelOpen(true)
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
              onClick={()=>{
                setPanelOpen(true)
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 opacity-0 bg-red-500"></div>
      </div>
    </div>
  );
};

export default Home;
