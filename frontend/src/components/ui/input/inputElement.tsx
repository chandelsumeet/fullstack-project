import { InputElementProps } from "@/app/_types/component.type";
import "./input.scss";
const InputElement = ({ placeholder, type, ...props }: InputElementProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      {...props}
      className="disabled:cursor-not-allowed"
    />
  );
};
export default InputElement;
