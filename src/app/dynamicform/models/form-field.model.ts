import { IFieldConfig, IValidator } from "../interfaces/form-field.interface";

export class FormField implements IFieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  placeholder?: string;
  options?: any[];
  collections?: any;
  readonly?: boolean;
  type: string;
  value?: any;
  validations?: IValidator[];
  dateOpts?: { format?: string; min?: string; max?: string; };
  action?: Function;

  constructor(
    field: IFieldConfig
  ) {
    this.label = field.label;
    this.name = field.name;
    this.inputType = field.inputType;
    this.placeholder = field.placeholder;
    this.options = field.options;
    this.collections = field.collections;
    this.readonly = field.readonly;
    this.type = field.type;
    this.value = field.value;
    this.validations = field.validations;
    this.dateOpts = field.dateOpts;
    this.action = field.action;
  }

}
