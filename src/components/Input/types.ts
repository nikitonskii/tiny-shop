export interface InputProps {
  label?: string;
  type: string;
  required: boolean;
  onChange: (e: any) => void;
  name: string;
  placeholder: string;
  errorText?: string;
  isShowPasswordIcon?: boolean;
}
