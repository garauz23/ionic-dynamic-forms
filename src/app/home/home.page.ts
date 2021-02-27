import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { IFieldConfig } from '../dynamicform/interfaces/form-field.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public demoForm: FormGroup;
  public validForm = false;
  regConfig: IFieldConfig[] = [
    {
      type: 'input',
      label: 'Usuario',
      inputType: 'text',
      name: 'username',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Escribe tu usuario perro',
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Solo texto',
        },
      ],
    },
    // {
    //   type: 'input',
    //   label: 'Correo electronico',
    //   inputType: 'email',
    //   name: 'email',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'Correo electronico requerido',
    //     },
    //     {
    //       name: 'pattern',
    //       validator: Validators.pattern(
    //         '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
    //       ),
    //       message: 'Correo invalido',
    //     },
    //   ],
    // },
    // {
    //   type: 'input',
    //   label: 'Password',
    //   inputType: 'password',
    //   name: 'password',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'contrasenia requerida',
    //     },
    //   ],
    // },
    // {
    //   type: 'radiobutton',
    //   label: 'Sexo',
    //   name: 'gender',
    //   options: [
    //     { key: 'male', value: 'Masculino' },
    //     { key: 'female', value: 'Femenino' },
    //   ],
    //   value: 'Male',
    // },
    // {
    //   type: 'date',
    //   label: 'Fecha de nacimiento',
    //   name: 'dob',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'Ingresa tu fecha de nacimiento',
    //     },
    //   ],
    // },
    // {
    //   type: 'select',
    //   label: 'Pais',
    //   name: 'country',
    //   value: 'UK',
    //   options: [
    //     { key: 'panama', value: 'Panama' },
    //     { key: 'colombia', value: 'Colombia' },
    //   ],
    // },
    // {
    //   type: 'checkbox',
    //   label: 'Accept Terms',
    //   name: 'term',
    //   value: true,
    // },
    {
      type: 'button',
      label: 'Guardar',
      action: () => {
        console.log('pruebas');
      }
    },
  ];


  fields2: IFieldConfig[] = [
    {
      type: 'input',
      label: 'Usuario',
      inputType: 'text',
      name: 'username',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Escribe tu usuario perro',
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Solo texto',
        },
      ],
    },
  ];

  constructor() {
  }

  ngOnInit() {}

  submitForm() {
    console.log(this.demoForm.value);
  }

  setDynamicallyForm(event: any) {
    this.demoForm = event;
    this.demoForm.statusChanges.subscribe((change): void => {
      this.validForm = change === 'VALID';
    });
  }
}
