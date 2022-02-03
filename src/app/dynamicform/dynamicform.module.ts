import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ButtonComponent } from './components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { ShowHidePasswordComponent } from './components/show-hide-password/show-hide-password.component';
import { InputComponent } from './components/input/input.component';
import { ValidateMessageComponent } from './components/validate-message/validate-message.component';
import { InputActionComponent } from './components/input-action/input-action.component';
import { HiddenComponent } from './components/hidden/hidden.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectPlusComponent } from './components/select-plus/select-plus.component';
import { OptionsModalComponent } from './components/select-plus/options-modal/options-modal.component';

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
    ShowHidePasswordComponent,
    ValidateMessageComponent,
    InputActionComponent,
    HiddenComponent,
    TextareaComponent,
    SelectPlusComponent,
    OptionsModalComponent
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicFormComponent, ReactiveFormsModule],
})
export class DynamicformModule {}
