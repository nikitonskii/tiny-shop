export interface IProps {
  label?: string
  type: string
  required?: Boolean
  error?: string | Boolean
  onAction: (e: any) => void
  id: string
  placeholder: string
  errorText?: string
  onIconAction: (e: any) => void
  leftIcon?: string
}