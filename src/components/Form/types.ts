export interface FormProps {
  config: ConfigItem[];
  onSubmit: (email: string, password: string, firstName: string) => void;
  buttonTitle: string;
}

export interface Fields {
  [propName: string]: string;
}

export interface ValidationFields {
  [propName: string]: boolean;
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
