import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFieldConfig, IFormOptions } from '../dynamicform/interfaces/form-field.interface';
import { FormField } from '../dynamicform/models/form-field.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public demoForm: FormGroup;
  public validForm = false;
  public formOptions: IFormOptions = { resetOnSubmit: true };
  public listFields: IFieldConfig[] = [];
  public loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForm();
  }

  submitForm() {
    console.log(this.demoForm.value);
  }

  setDynamicallyForm(event: any) {
    this.demoForm = event;
    this.demoForm.statusChanges.subscribe((change): void => {
      this.validForm = change === 'VALID';
    });
  }

  getForm() {
    this.loading = true;
    this.listFields = [];
    console.log('hit');
    this.http.post('http://localhost:8888/getfieldsform1', {})
    .subscribe((data: any) => {
      console.log('data', data);
      let fields = data.body.fields;
      // fields.push({
      //   type: 'button',
      //   label: 'Guardar',
      //   action: () => {
      //     console.log('pruebas');
      //   }
      // });
      fields.forEach(field => {
        this.loading = false;
        this.listFields.push(new FormField(field));
      });
      this.loading = false;
    });
  }
}
