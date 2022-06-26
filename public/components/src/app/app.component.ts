import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Computer, ComputerUpdate } from './app.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  computers: any = []
  computerToUpdate: any = []

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(allComputers => this.computers = allComputers)
  }

  getOne(id: number) {
    this.service.getOne(id).subscribe(computerToUpdate =>
      this.computerToUpdate = computerToUpdate
    )
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