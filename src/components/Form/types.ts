export interface FormProps {
  config: ConfigItem[];
  onSubmit: (prop: Fields) => void;
  buttonTitle: string;
}

export interface Fields {
  [propName: string]: string;
}

export interface ValidationFields {
  [propName: string]: string;
}

export interface ConfigItem {
  label?: string;
  type: string;
  required: boolean;
  name: string;
  placeholder: string;
  errorText?: string;
  isShowPasswordIcon?: boolean;
}
