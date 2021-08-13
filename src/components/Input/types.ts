export interface InputProps {
  label?: string
  type: string 
  isRequired: boolean
  isError?: boolean
  onAction: (e: any) => void
  name: string
  placeholder: string
  errorText?: string
  passwordType?: boolean
}