export interface IButtonProps {
  title: string
  onAction?: () => void
  buttonType?: ButtonTypes
}

export enum ButtonTypes {
  submit = 'submit',
  reset = 'reset',
  button = 'button'
}