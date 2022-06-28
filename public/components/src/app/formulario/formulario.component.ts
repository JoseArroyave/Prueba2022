import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Computer } from '../app.interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent {

  @Output() computadorNuevo = new EventEmitter<Computer>()

  constructor(private fb: FormBuilder) { }

  createForm: FormGroup = this.fb.group({
    gce_id: [],
    gce_nombre_equipo: [],
    gce_board: [],
    gce_case: [],
    gce_procesador: [],
    gce_grafica: [],
    gce_ram: [],
    gce_disco_duro: [],
    gce_teclado: [],
    gce_mouse: [],
    gce_pantalla: [],
    gce_estado: [1]
  })

  onSubmit() {
    this.computadorNuevo.emit(this.createForm.value)
    this.createForm.reset(this.createForm);
  }
}
