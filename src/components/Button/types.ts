export interface IButtonProps {
  title: string;
  onClick?: () => void;
  buttonType?: ButtonTypes;
  isDisabled?: boolean;
}

export enum ButtonTypes {
  submit = "submit",
  reset = "reset",
  button = "button",
}
