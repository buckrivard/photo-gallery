import { FunctionComponent } from "react";

interface IButtonProps {
  clickAction: () => void;
  classes?: string;
}

const Button: FunctionComponent<IButtonProps> = ({ clickAction, classes = '', children }) => {
  return (
    <button className={`${classes} btn`} onClick={clickAction}>
      {children}
    </button>
  );
};

export default Button;
