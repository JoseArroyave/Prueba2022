import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Computer } from '../app.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html'
})
export class FormularioModalComponent implements OnInit {

  constructor(private modal: NgbModal, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  @Input('computerToUpdate') computerToUpdate!: any
  @ViewChild('contenido') contenido: any;

  updatedForm: FormGroup = this.fb.group({
    gce_id_actualizado: [],
    gce_nombre_equipo_actualizado: [],
    gce_board_actualizado: [],
    gce_case_actualizado: [],
    gce_procesador_actualizado: [],
    gce_grafica_actualizado: [],
    gce_ram_actualizado: [],
    gce_disco_duro_actualizado: [],
    gce_teclado_actualizado: [],
    gce_mouse_actualizado: [],
    gce_estado_actualizado: []
  })

  onSubmit(): void {
    console.log('Form ->', this.computerToUpdate.gce_id)
    this.dismssModal()
  }

  openModal() {
    this.modal.open(this.contenido)
  }

  dismssModal() {
    this.modal.dismissAll()
  }
}
