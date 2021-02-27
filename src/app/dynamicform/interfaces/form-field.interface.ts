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
  collections?: any;
  type: string;
  value?: any;
  validations?: IValidator[];
}
