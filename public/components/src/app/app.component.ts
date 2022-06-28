import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ComputerUpdate } from './app.interface';
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

  @ViewChild('contenido') contenido!: FormularioModalComponent;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getAll()
  }

  changeSwitch(id: number, status: any) {
    this.service.updateStatus({ gce_id_actualizado: id, gce_estado_actualizado: status }).subscribe(resp =>
      console.log(resp)
    )
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

  delete(id: number) {
    this.service.delete(id).subscribe(resp =>
      console.log(resp)
    )
  }

  create($event: any) {
    this.service.create($event).subscribe(() =>
      Swal.fire({
        icon: 'success',
        text: `El equipo ${$event.gce_nombre_equipo} ha sido agregado`,
      })
    )
  }
}