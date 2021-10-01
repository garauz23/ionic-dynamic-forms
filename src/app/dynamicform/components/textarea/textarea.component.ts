import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  field: IFieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {}

}
