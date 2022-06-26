import { Component, Input } from '@angular/core';
import { Computer } from '../app.interface';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html'
})
export class FormularioModalComponent {

  @Input() computerToUpdate!: Computer

  constructor() { }

}
