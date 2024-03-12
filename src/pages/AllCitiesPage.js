import React from "react";
import CityPanel from "../components/CityPanel";
const AllCitiesPanel = () => {
  return (
    <div className="w-full h-full flex">
        <div className="w-96 bg-yellow-300">
            
        </div>
        <div className="flex-grow flex justify-center my-10">
            <div className="w-9/12 flex flex-col items-center">
                <h2 className="text-black font-semibold text-2xl">PODRÓŻUJ ZWIEDZAJ OCENIAJ</h2>
            <div className="min-h-96 flex gap-10  flex-wrap justify-center items-start my-20">
                <CityPanel name="Warszawa"/>
                <CityPanel name="Warszawa"/>
                <CityPanel name="Warszawa"/>
                <CityPanel name="Warszawa"/>
                <CityPanel name="Warszawa"/>
            </div>
            <div>1/20 Strona</div>
            </div>

            
        </div>
    </div>
  );
};

export default AllCitiesPanel;
