import { ReactSVG } from "react-svg";
import dashboard from "../assets/icons.svg";

type PropTypes = {
  id: string;
  className?: string;
};
const SVGComponent = ({ id, className }: PropTypes) => {
  return (
    <>
      <ReactSVG src={`${dashboard}`} hidden/>
      <svg className={className}>
        <use xlinkHref={`#${id}`} />
      </svg>
    </>
  );
};

export default SVGComponent;
