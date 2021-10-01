import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { IFieldConfig } from '../interfaces/form-field.interface';
import { ButtonComponent } from '../components/button/button.component';
import { SelectComponent } from '../components/select/select.component';
import { DateComponent } from '../components/date/date.component';
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { InputActionComponent } from '../components/input-action/input-action.component';
import { HiddenComponent } from '../components/hidden/hidden.component';
import { TextareaComponent } from '../components/textarea/textarea.component';
const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  inputaction: InputActionComponent,
  hidden: HiddenComponent,
  textarea: TextareaComponent
};


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: IFieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
