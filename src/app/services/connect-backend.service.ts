import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConnectBackendService {
    private apiUrl = 'http://localhost:8080/category';

    constructor(private http: HttpClient) { }

    obtenerDatos(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
