interface IForm {}

interface IFormFields {
  key: string;
  type: string;
  options: IFormFieldsOptions;
}

interface IFormFieldsOptions {
  label: string;
  placeholder: string;
  required: boolean;
  class: string;
  position: string;
}
