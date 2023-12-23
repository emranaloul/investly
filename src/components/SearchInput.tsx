import SVGComponent from "./SVGComponent";

const SearchInput = (props: { placeholder?: string; id?: string }) => {
  return (
    <div className=" w-60 h-10 relative">
      <input
        type="text"
        placeholder={props.placeholder ?? "try 'Miami beachhouse'"}
        className=" my-auto placeholder w-full h-full py-3 px-4 border border-gray-200 rounded-[32px]"
      />
      <SVGComponent
        id={props.id ?? "input-search-icon"}
        className=" w-4 h-4 absolute end-2 text-gray-600 top-3"
      />
    </div>
  );
};

export default SearchInput;
