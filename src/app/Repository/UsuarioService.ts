import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../Models/UsuarioModel';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {

    }

    getUsuarios() {
        return this.http.get<UsuarioModel[]>(this.baseUrl)
    }

    getUsuario(id: number) {
        return this.http.get<UsuarioModel>(`${this.baseUrl}/${id}`)
    }

    addUsuario(record: UsuarioModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8')

        return this.http.post<UsuarioModel>(this.baseUrl, JSON.stringify(record), { headers: headers });
    }

    updateUsuario(record: UsuarioModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8')

        return this.http.put<UsuarioModel>(`${this.baseUrl}/${record.id}`, JSON.stringify(record), { headers: headers });
    }

    deleteUsuario(id: number) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8')

        return this.http.delete<UsuarioModel>(`${this.baseUrl}/${id}`, { headers: headers });
    }
}