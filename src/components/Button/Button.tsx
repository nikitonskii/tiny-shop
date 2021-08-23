import React from "react";

import { IButtonProps } from "../Button/types";

const Button: React.FC<IButtonProps> = ({
  buttonType,
  onClick,
  title,
}): JSX.Element => {
  return (
    <button className="button" type={buttonType} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
