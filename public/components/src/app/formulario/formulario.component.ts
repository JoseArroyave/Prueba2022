import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Computer } from '../app.interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent implements OnInit {

  @Output() computadorNuevo = new EventEmitter<Computer>()


  gce_nombre_equipo = ''
  gce_board = ''
  gce_case = ''
  gce_procesador = ''
  gce_grafica = ''
  gce_ram = ''
  gce_disco_duro = ''
  gce_teclado = ''
  gce_mouse = ''
  gce_pantalla = ''
  gce_estado = ''
  created_at = null
  updated_at = null


  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    this.computadorNuevo.emit({
      gce_nombre_equipo: this.gce_nombre_equipo,
      gce_board: this.gce_board,
      gce_case: this.gce_case,
      gce_procesador: this.gce_procesador,
      gce_grafica: this.gce_grafica,
      gce_ram: this.gce_ram,
      gce_disco_duro: this.gce_disco_duro,
      gce_teclado: this.gce_teclado,
      gce_mouse: this.gce_mouse,
      gce_pantalla: this.gce_pantalla,
      gce_estado: this.gce_estado,
      created_at: this.created_at,
      updated_at: this.updated_at
    })
  }
}
