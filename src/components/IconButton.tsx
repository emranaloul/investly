import { ButtonHTMLAttributes, FC } from "react";
import SVGComponent from "./SVGComponent";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const IconButton: FC<CustomButtonProps> = ({ icon, className, ...props }) => {
  return (
    <button
      className={" border-gray-200  rounded-[32px] border p-3 ".concat(
        className ?? ""
      )}
      {...props}
    >
      <SVGComponent id={icon} className="w-4 h-4" />
    </button>
  );
};

export default IconButton;
