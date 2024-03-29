export interface IValidator {
  name: string;
  validator: any;
  message: string;
}

export interface IFieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  placeholder?: string;
  options?: any[];
  collections?: ICollection[];
  readonly?: boolean;
  length?: string;
  type: string;
  value?: any;
  validations?: IValidator[];
  dateOpts?: {
    format?: string;
      min?: string;
      max?: string
  };
  action?: Function;
}

export interface IFormOptions {
  resetOnSubmit?: boolean;
}
export interface ICollection {
  title?: string;
  name?: string;
  endpoint?: string;
}
