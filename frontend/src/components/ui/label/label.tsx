import { LabelProps } from "@/app/_types/component.type";
import "./label.scss";
const Label = ({ htmlFor, labelText }: LabelProps) => {
  return <label htmlFor={htmlFor}>{labelText}</label>;
};
export default Label;
