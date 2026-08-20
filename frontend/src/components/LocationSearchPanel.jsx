const LocationSearchPanel = (props) => {
  
  const locations = [
    "24B, Near Kapoor's cafe bhubaneswar",
    "21B, Near aryan's cafe bhubaneswar",
    "34C, Nera cinema complex",
  ];

  return (
    <div>
      {locations.map(function (elem,idx) {
        return (
          <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className="flex items-center border-2 p-2 border-gray-50 active:border-black rounded-xl active:border-2 justify-start my-2 gap-2">
            <h2 className="bg-[#eee] h-8 w-8 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="text-m">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
