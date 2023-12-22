import { Link } from "react-router-dom";
import SVGComponent from "./SVGComponent";
import data from "../data";
import image from "../assets/Image.svg";
import { Children, useState } from "react";
const SideNavbar = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <nav className=" w-1/5 h-256 border-end  border border-[#FFFFF] ">
      <div>
        <p className=" flex justify-center  text-center text-[28px]  h-[84px] my-auto font-[900]">
          <span className=" my-auto text-[#0D0D54]">Investly</span>
          <span className=" my-auto text-[#4040F2]">.</span>
        </p>
      </div>
      <hr className="h-4 opacity-0" />
      <div className=" h-[701px]">
        <ul>
          {Children.toArray(
            data.navbar.map((item, i) => (
              <li
                className={`h-12 ${
                  i === active ? "border-blue-500 border" : ""
                }`}
              >
                <Link
                  to={item.href}
                  className={`${
                    active !== i
                      ? "text-gray-600"
                      : "border-e-4 text-[#0D0D54] border-blue-500 border-3"
                  } flex h-full justify-start items-center capitalize`}
                  onClick={() => setActive(i)}
                >
                  <SVGComponent
                    id={item.icon}
                    className={`w-6 h-6 mx-6 ${
                      active !== i ? "text-gray-400" : "text-[#4040F2]"
                    }`}
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
      <hr className="h-4 opacity-0" />
      <div>
        <ul>
          <li className="h-12">
            <Link
              to={"/"}
              className="h-12 flex justify-start items-center capitalize text-gray-600"
            >
              <SVGComponent
                id="settings"
                className="w-6 h-6 mx-6 text-gray-400"
              />
              settings
            </Link>
          </li>
          <li className="h-12">
            <Link
              to={"/"}
              className="h-full flex  justify-start items-center capitalize text-gray-600"
            >
              <SVGComponent
                id="help-center"
                className=" w-6 h-6 mx-6 text-gray-400"
              />
              help center
            </Link>
          </li>
        </ul>
      </div>
      <div className=" w-full h-24 justify-center items-center flex py-6 px-7">
        <div className=" flex ">
          <img src={image} />
          <p className="max-w-fit mx-[15px] line-clamp-none ">
            <span className=" text-[16px] text-gray-600">Louise Thompson</span>
            <br />
            <span className="  text-[12px] text-gray-600">Enterprise plan</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
