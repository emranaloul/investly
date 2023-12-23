import SVGComponent from "./SVGComponent";

type PropTypes = {
  title: string;
  count: string | number;
  chart?: JSX.Element;
  chartIcon: string;
};
const ChartCard = ({ title, count, chart, chartIcon }: PropTypes) => {
  return (
    <div className="w-[360px] h-[159px] border border-gray-200 rounded-xl flex justify-between">
      <div className=" flex flex-col justify-stretch h-full w-1/2">
        <span className=" m-auto text-lg text-gray-700 font-semibold">
          {title}
        </span>
        <span className=" m-auto text-[28px] font-semibold text-gray-800">
          {count}
        </span>
      </div>
      <div className=" w-1/2 flex justify-center items-center">
        {chart}
        <SVGComponent id={chartIcon} className=" absolute w-7 h-7" />
        {/* <span className=" m-auto">chart</span> */}
      </div>
    </div>
  );
};

export default ChartCard;
