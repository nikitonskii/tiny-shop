export interface IButtonProps {
  title: string
  onAction?: React.MouseEventHandler
  buttonType?: 'submit' | 'reset' | 'button'
}