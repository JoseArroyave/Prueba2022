import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Computer } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  #apiPath = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Computer[]> {
    return this.http.get<Computer[]>(`${this.#apiPath}/getAll`);
  }

  getOne(id: number): Observable<Computer> {
    return this.http.get<Computer>(`${this.#apiPath}/getOne/${id}`);
  }

  delete(id: number): Observable<Computer> {
    return this.http.delete<Computer>(`${this.#apiPath}/delete/${id}`)
  }

  create(parameters: Computer): Observable<Computer> {
    return this.http.post<Computer>(`${this.#apiPath}/create/`, parameters);
  }

  update(parameters: Computer): Observable<Computer> {
    return this.http.put<Computer>(`${this.#apiPath}/update/${parameters.gce_id}`, parameters);
  }

  updateStatus(parameters: any): Observable<Computer> {
    return this.http.put<Computer>(`${this.#apiPath}/updateStatus/${parameters.gce_id}/`, parameters);
  }
}
