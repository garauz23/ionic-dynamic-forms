import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-input-action',
  templateUrl: './input-action.component.html',
  styleUrls: ['./input-action.component.scss'],
})
export class InputActionComponent implements OnInit {
  field: IFieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {}

  isSubmitButton() {
    return typeof this.field.action === 'undefined';
  }

}
