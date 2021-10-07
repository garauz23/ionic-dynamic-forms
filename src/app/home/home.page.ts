import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { IFieldConfig, IFormOptions } from '../dynamicform/interfaces/form-field.interface';
import { FormField } from '../dynamicform/models/form-field.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {0.
  @ViewChild('formSlides') formSlides: IonSlides;
  public slideLength: number;
  public currentSlide = 0;


  public demoForm: FormGroup;
  public validForm = false;
  public formOptions: IFormOptions = { resetOnSubmit: true };
  public listFields: IFieldConfig[] = [];
  public listFields2: IFieldConfig[] = [];
  public loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForm();
  }

  setCurrentSlide() {
    this.formSlides.getActiveIndex().then((pos) => {
      // this.setHeaderTitle(pos);
      this.currentSlide = pos;
    });
  }


  next() {
    console.log('testing', this.demoForm);
    if (this.demoForm.valid) {
      this.formSlides.lockSwipes(false);
      this.formSlides.slideNext();
      this.formSlides.lockSwipes(true);
      this.setCurrentSlide();
    }
  }

  prev() {
    this.formSlides.lockSwipes(false);
    this.formSlides.slidePrev();
    this.formSlides.lockSwipes(true);
    this.setCurrentSlide();
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
    this.http.post('http://localhost:8888/getfieldsform1', {})
    .subscribe((data: any) => {
      const fields = data.body.fields;
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

    // this.http.post('http://localhost:8888/getfieldsform2', {})
    // .subscribe((data: any) => {
    //   const fields = data.body.fields;
    //   // fields.push({
    //   //   type: 'button',
    //   //   label: 'Guardar',
    //   //   action: () => {
    //   //     console.log('pruebas');
    //   //   }
    //   // });
    //   fields.forEach(field => {
    //     this.loading = false;
    //     this.listFields2.push(new FormField(field));
    //   });
    //   this.loading = false;
    // });
  }
}
