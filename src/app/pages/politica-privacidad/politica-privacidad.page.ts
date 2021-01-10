import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.page.html',
  styleUrls: ['./politica-privacidad.page.scss'],
})
export class PoliticaPrivacidadPage implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }
  cancelar(){
    this.modal.dismiss();
  }

}
