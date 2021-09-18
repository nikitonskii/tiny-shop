import React from "react";

import { IButtonProps } from "../Button/types";

const Button: React.FC<IButtonProps> = ({
  buttonType,
  onClick,
  title,
  isDisabled,
}): JSX.Element => {
  return (
    <button
      disabled={isDisabled}
      className={isDisabled ? "disabled button" : "button"}
      type={buttonType}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
