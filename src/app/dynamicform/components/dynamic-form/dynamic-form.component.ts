import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFieldConfig, IFormOptions } from '../../interfaces/form-field.interface';
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
    'phone': Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    'max9': Validators.maxLength(9),
    'min9': Validators.minLength(9)
  }

  // get value() {
  //   return this.form.value;
  // }

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

      if (field.collections) {
        field.collections.forEach((collection, index) => {
          const control = this.formBuilder.control(
            field.value,
            this.bindValidations(field.validations || [])
          );
          group.addControl(collection.name, control);
        });
      }
    });
    this.formGroup.emit(group);
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(validation => {
        validList.push(this.getValidator(validation.validator));
      });
      return Validators.compose(validList);
    }
    return null;
  }

  getValidator(validator) {
    return this.VALIDATORS[validator];
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
