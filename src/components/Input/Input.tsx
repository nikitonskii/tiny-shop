import React, { useState } from "react";

import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  label,
  type,
  required,
  onChange,
  name,
  placeholder,
  errorText,
  passwordType,
}): JSX.Element => {
  const [isShowPassword, setShowPassword] = useState<boolean>(true);
  const showPassword = () => setShowPassword(!isShowPassword);

  return (
    <div className="input-container">
      <label className="input-label" htmlFor={label}>
        {label}
        {required && <i className="fas fa-asterisk input-label-icon"></i>}
      </label>
      <input
        className={errorText ? "error input" : "input"}
        type={passwordType ? (isShowPassword ? "password" : "text") : type}
        name={name}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
      {passwordType && (
        <span className="input-icon-container" onClick={showPassword}>
          <i
            className={isShowPassword ? "fas fa-eye-slash input-icon" : "fas fa-eye input-icon"}
          ></i>
        </span>
      )}
      {errorText && <p className="input-error-text">{errorText}</p>}
    </div>
  );
};

export default Input;
