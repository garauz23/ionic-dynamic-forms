import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IFieldConfig } from '../../interfaces/form-field.interface';
import { OptionsModalComponent } from './options-modal/options-modal.component';

@Component({
  selector: 'app-select-plus',
  templateUrl: './select-plus.component.html',
  styleUrls: ['./select-plus.component.scss'],
})
export class SelectPlusComponent implements OnInit {
  field: IFieldConfig;
  group: FormGroup;
  
  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadOptions(this.field.collections[0].endpoint);
  }

  loadOptions(endpoint) {
    this.http.post(`http://localhost:8888/${endpoint}`, {})
    .subscribe((data: any) => {
      console.log(data);
      const items = data.body.options;
      this.field.options = items;
    });
  }

  async openOptions() {
    const modal = await this.modalController.create({
      component: OptionsModalComponent,
      componentProps: {
        itemList: [this.field.options],
        collections: this.field.collections,
      },
      cssClass: 'medium',
    });
    
    await modal.present();

    const { data } = await modal.onWillDismiss();

    if(data) {
      // Parse and set selected values on form
      this.field.value = this.generateFieldParameter(data);
      // Fill hidden fields for nested selection
      this.field.collections.forEach((collection, index) => {
        this.group.get(collection.name).setValue(data[index].code);
      });
    }

  }


  /* create a human friendly version of set of selected fields */
  private generateFieldParameter(fields: any[]){
    let visibleField = '';
    fields.forEach((field, index) => {
      if(index < fields.length - 1) {
        visibleField += field.description + ' > '
      } else {
        visibleField += field.description;
      }
    })

    return visibleField;
  }
}
