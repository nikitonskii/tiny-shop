
export interface Fields {
  [propName: string]: any
}

export interface ValidationFields {
  [propName: string]: Boolean 
}

export interface ConfigItem {
  label?: string
  type: string 
  optionalType: string 
  isRequired?: Boolean
  isError?: Boolean
  onAction?: Boolean
  id: string
  placeholder: string
  errorText?: string
  onIconAction?: Boolean
  leftIcon?: string
}