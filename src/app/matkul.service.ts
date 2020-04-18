import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matkul } from './matkul';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatkulService {
  baseUrl = 'https://crudcrud.com/api/005abf14d406408abd578fed440f2232';
  constructor(private http: HttpClient) { }

  getDataMatkul(id: string): Observable<Matkul>{
    return this.http.get<Matkul>(`${this.baseUrl}/matkul/${id}`);
  }

  getMatkul(): Observable<Matkul[]>{
    return this.http.get<Matkul[]>(`${this.baseUrl}/matkul`);
  }

  addMatkul(param: Matkul): Observable<any> {
    delete param._id;
    return this.http.post(`${this.baseUrl}/matkul`, param);
  }

  updateMatkul(id: string, param: Matkul): Observable<any>{
    return this.http.put(`${this.baseUrl}/matkul/${id}`, param);
  }

  deleteMatkul(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/matkul/${id}`);
  }
}
