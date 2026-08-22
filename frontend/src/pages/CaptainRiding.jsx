import { Link } from "react-router-dom"
import bgImage from "../assets/ChatGPT Image May 13, 2026, 06_04_54 PM.png";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "./FinishRide";
const CaptainRiding = () => {

    const finishRideRef = useRef(null)
    const [finishRidePanel, setFinishRidePanel] = useState(false)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRideRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(finishRideRef.current, {
                transform: "translateY(100%)",
            });
        }
    }, [finishRidePanel]);


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

            <div className="h-4/5">
                <img className="h-full w-full object-cover" src={bgImage} alt="" />
            </div>

            <div className="h-1/5 p-6 bg-yellow-500 flex items-center justify-between relative" >

                <h5 className="text-center w-[93%] absolute top-0" onClick={() => {
                }}><i className="text-3xl text-gray-800 ri-arrow-down-s-line"></i></h5>
                <h4 className="text-xl"> 4Km away</h4>
                <button onClick={()=>{
                setFinishRidePanel(true)
            }} className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
            </div>

            <div ref={finishRideRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>

        </div>
    )
}

export default CaptainRiding
