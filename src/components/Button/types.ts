export interface IButtonProps {
  title: string;
  onClick?: () => void;
  buttonType?: ButtonTypes;
}

export enum ButtonTypes {
  submit = "submit",
  reset = "reset",
  button = "button",
}
