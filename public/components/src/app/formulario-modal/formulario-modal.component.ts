import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Computer } from '../app.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html'
})
export class FormularioModalComponent implements OnInit, OnChanges {

  constructor(private modal: NgbModal, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  @Input('computerToUpdate') computerToUpdate!: any
  @Output() computadorActualizado = new EventEmitter<Computer>()
  @ViewChild('contenido') contenido: any;

  updatedForm: FormGroup = this.fb.group({
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
    gce_estado: []
  })

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['computerToUpdate']) {
      this.updatedForm.patchValue(changes['computerToUpdate'].currentValue)
    }
  }

  onSubmit(): void {
    this.computadorActualizado.emit(this.updatedForm.value)
    this.dismssModal()
  }

  openModal() {
    this.modal.open(this.contenido)
  }

  dismssModal() {
    this.modal.dismissAll()
  }
}
