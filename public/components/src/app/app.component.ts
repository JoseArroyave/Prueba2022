import { Component, OnInit, ViewChild } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Computer } from './app.interface';
import { AppService } from './app.service';
import { FormularioModalComponent } from './formulario-modal/formulario-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  computers: any = []
  computerToUpdate: any = []
  faPencil = faPencil
  faTrash = faTrash

  @ViewChild('contenido') contenido!: FormularioModalComponent;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getAll()
  }

  changeSwitch(computer: Computer) {
    this.service.updateStatus({ gce_id: computer.gce_id, gce_estado: computer.gce_estado === 0 ? 1 : 0 }).subscribe(resp => (
      computer.gce_estado = resp.gce_estado
    ))
  }

  getAll() {
    this.service.getAll().subscribe(allComputers => this.computers = allComputers)
  }

  getOne(id: number) {
    this.service.getOne(id).subscribe(computerToUpdate =>
      this.computerToUpdate = computerToUpdate
    )
    this.contenido.openModal()
  }

  delete(id: number, nombre: string) {
    this.service.delete(id).subscribe(() => (
      this.computers.pop(),
      this.getAll(),
      Swal.fire({
        icon: 'success',
        text: `El equipo ${nombre} ha sido eliminado`,
      }))
    )
  }

  create($event: Computer) {
    this.service.create($event).subscribe(data => (
      this.computers.push(data),
      Swal.fire({
        icon: 'success',
        text: `El equipo ${$event.gce_nombre_equipo} ha sido agregado`,
      }))
    )
  }

  update($event: Computer) {
    this.service.update($event).subscribe(data => (
      this.getAll(),
      Swal.fire({
        icon: 'success',
        text: `El equipo ${data.gce_nombre_equipo} ha sido actualizado correctamente`,
      }))
    )
  }
}