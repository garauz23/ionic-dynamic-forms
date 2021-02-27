import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';

@NgModule({
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    ButtonComponent,
    InputComponent,
    DateComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicFormComponent, ReactiveFormsModule],
})
export class DynamicformModule {}
