import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFieldConfig, IFormOptions } from '../../interfaces/form-field.interface';

// enum validations {
//   'required' = Validators.required,

// }
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: IFieldConfig[] = [];
  @Input() form: FormGroup;
  @Input() formOptions: IFormOptions;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() formGroup: EventEmitter<any> = new EventEmitter<any>();

  public VALIDATORS = {
    'required': Validators.required,
    'onlyletters': Validators.pattern('^[a-zA-Z]+$'),
    'email': Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  }

  get value() {
    return this.form.value;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
    console.log('formOptions', this.formOptions);
    if (this.formOptions || this.formOptions.resetOnSubmit) {
      this.form.reset();
    }

  }

  createControl(){
    const group = this.formBuilder.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') { return; }
      const control = this.formBuilder.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    this.formGroup.emit(group);
    return group;
  }

  bindValidations(validations: any) {
    console.log('validations', validations);
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(validation => {
        console.log(validation.validator);
        validList.push(this.getValidator(validation.validator));
      });
      return Validators.compose(validList);
    }
    return null;
  }

  getValidator(validator) {
    console.log(validator);
    return this.VALIDATORS[validator];
    // const validList = [];
    // validations.forEach(validator => {
    //   console.log(validator);
    //   validations = this.VALIDATORS[validator.validator]
    // });
    // return validList;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
