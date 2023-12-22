type PropTypes = {
  title: string;
  count: string | number;
  chart?: JSX.Element;
};
const ChartCard = ({ title, count, chart }: PropTypes) => {
  return (
    <div className="w-[360px] h-[159px] border border-gray-200 rounded-xl flex justify-between">
      <div className=" flex flex-col justify-stretch h-full w-1/2">
        <span className=" m-auto text-lg text-gray-700 font-semibold">{title}</span>
        <span className=" m-auto text-[28px] font-semibold text-gray-800">{count}</span>
      </div>
      <div className=" w-1/2 flex">
        {chart}
        {/* <span className=" m-auto">chart</span> */}
      </div>
    </div>
  );
};

export default ChartCard;
