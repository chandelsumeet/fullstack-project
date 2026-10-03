export interface InputElementProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
}
export interface LabelProps {
  htmlFor?: string;
  labelText: string;
}
