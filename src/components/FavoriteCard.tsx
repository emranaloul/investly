import { Fragment } from "react";
import SVGComponent from "./SVGComponent";

const FavoriteCard = ({ title, image }: { title: string; image: string }) => {
  const IconWithTitle = ({
    iconId,
    title,
  }: {
    iconId: string;
    title: string;
  }) => (
    <Fragment>
      <div className="flex gap-2">
        <SVGComponent id={iconId} className=" w-4 h-4 text-gray-500" />
        <span className=" text-[12px] text-gray-600">{title}</span>
      </div>
    </Fragment>
  );
  return (
    <div className=" w-[360px] p-6 border border-gray-200 rounded-xl flex gap-y-6 flex-col">
      <img className=" w-[312px] h-[157px]" src={image} />
      <span className=" text-lg font-semibold text-gray-800 ">{title}</span>
      <p className=" text-[12px] text-gray-600 font-normal">
        A beautiful townhouse in the heart of Miami’s down town district. With 3
        bedrooms and a heated pool.
      </p>
      <div className="flex gap-4">
        <IconWithTitle iconId="location-pin" title="Boston" />
        <IconWithTitle iconId="rooms" title="5 bedroom" />
        <IconWithTitle iconId="villa" title="Villa" />
      </div>
      <div>
        <button className=" border rounded-xl border-gray-200 w-full text-sm font-normal py-[19px] text-gray-900">
          View listing details
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
