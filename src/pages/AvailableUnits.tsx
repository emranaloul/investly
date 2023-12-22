import React from "react";
import SVGComponent from "../components/SVGComponent";

const AvailableUnits = () => {
  return (
    <div className=" flex flex-col ">
      <div className="h-[86px] flex justify-between px-9 items-center">
        <div className=" flex gap-2">
          <h2 className=" my-auto w-fit text-[28px] font-semibold text-gray-700">
            Current projects
          </h2>
          <SVGComponent id="arrow-dropdown" className=" w-4 cursor-pointer" />
        </div>
        <div className=" flex gap-3">
          <button className=" bg-[#4040F2] h-10 text-[14px] gap-2 text-[#FFFFFF] flex p-3 rounded-[32px] items-center">
            New project
            <div>
              <SVGComponent id="plus" className=" w-4 h-4" />
            </div>
          </button>
          <button className=" border-gray-200  rounded-[32px] border p-3">
            <SVGComponent id="bell" className="w-4 h-4" />
          </button>
          <button className="border-gray-200  rounded-[32px] border p-3">
            <SVGComponent id="search" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableUnits;
