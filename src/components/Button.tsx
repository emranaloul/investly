import SVGComponent from "./SVGComponent";

function Button({ btnTitle, svgId }: { btnTitle?: string; svgId: string }) {
  return (
    <button className=" h-10 text-[14px] gap-2 text-gray-900 font-semibold flex items-center  border-gray-200  rounded-[32px] border p-3">
      {btnTitle}
      <div>
        <SVGComponent id={svgId} className=" w-4 h-4" />
      </div>
    </button>
  );
}

export default Button;
