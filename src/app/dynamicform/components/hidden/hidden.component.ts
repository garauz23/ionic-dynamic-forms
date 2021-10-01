import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.scss'],
})
export class HiddenComponent implements OnInit {
  field: IFieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {}

}
