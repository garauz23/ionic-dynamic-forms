import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import { IFormOptions } from 'src/app/dynamicform/interfaces/form-field.interface';

@Component({
  selector: 'app-options-modal',
  templateUrl: './options-modal.component.html',
  styleUrls: ['./options-modal.component.scss'],
})
export class OptionsModalComponent implements OnInit {
  @Input() title: string;
  @Input() itemList: any[];
  @Input() collections: any[];

  public fields = [
    {
      type: 'select',
      label: 'Estado civil',
      name: 'maritalStatus',
      options: [
        {
          key: '1',
          value: 'Soltero (a)',
        },
        {
          key: '2',
          value: 'Cansado (a)',
        },
        {
          key: '3',
          value: 'Unido (a)',
        },
      ],
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Selecciona tu estado civil',
        },
      ],
    }
  ];

  
  @Input() public field: any;
  public formOptions: IFormOptions = { resetOnSubmit: true };
  public form: FormGroup;
  public validForm = false;

  @ViewChild('InputFormSlide') inputFormSlide: IonSlides


  slideOptions = {
    initialSlide: 0,

  };
  currentSlide: number = 0;
  responseArray = [];
  
  constructor(
    public modalController: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.title = this.collections[0].title;
  }

  ionViewDidEnter() {
    this.inputFormSlide.lockSwipes(true);
  }

  onChangeListener(event: any) {
    this.form = event;
    this.form.statusChanges.subscribe((change): void => {
      this.validForm = change === 'VALID';
    });
  }

  selectOption(option: any) {
    this.responseArray[this.currentSlide] = option;
    if (this.collections.length > 1 && this.collections.length !== this.currentSlide + 1) {
      this.loadNestedOptions(this.collections[this.currentSlide + 1]);
      this.next();
    } else {
      this.modalController.dismiss(this.responseArray);
    }
  }

  next() {
    console.log('next', this.responseArray);
    this.inputFormSlide.lockSwipes(false);
    this.inputFormSlide.slideNext();
    this.inputFormSlide.lockSwipes(true);
    this.setCurrentSlide();
  }

  prev() {
    this.inputFormSlide.lockSwipes(false);
    this.inputFormSlide.slidePrev();
    this.inputFormSlide.lockSwipes(true);
    this.setCurrentSlide();
  }

  setCurrentSlide() {
    this.inputFormSlide.getActiveIndex().then((pos) => {
      // this.setHeaderTitle(pos);
      console.log('pos', pos);
      this.currentSlide = pos;
      this.title = this.collections[pos].title;
    });
  }

  private loadNestedOptions(collection: any) {
    this.title = collection.title;
    this.http.post(`http://localhost:8888/${collection.endpoint}`, {})
    .subscribe((data: any) => {
      console.log(data);
      const items = data.body.options;
      this.itemList[this.currentSlide] = items;
    });
  }

}
