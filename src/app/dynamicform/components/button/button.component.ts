import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  field: IFieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {}

}
