export interface InputProps {
  label?: string
  type: string 
  isRequired?: Boolean
  isError?: Boolean
  onAction: (e: any) => void
  id: string
  placeholder: string
  errorText?: string
  onIconAction: (e: any) => void
  leftIcon?: string
}