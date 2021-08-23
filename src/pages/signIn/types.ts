export interface LoginProps {
  [propName: string]: string;
}

export interface ConfigItem {
  label?: string;
  type: string;
  isRequired: boolean;
  isError?: boolean;
  onAction?: boolean;
  name: string;
  placeholder: string;
  errorText?: string;
  passwordType?: boolean;
}
