import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
})
export class RadiobuttonComponent implements OnInit {
  field: IFieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {}

}
