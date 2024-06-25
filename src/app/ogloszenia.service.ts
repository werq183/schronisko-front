import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OgloszeniaService {
  private apiUrl = 'http://localhost:8000/api';
  backendUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  getOgloszenia(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ogloszenia`);
  }

  getOgloszenieById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ogloszenia/${id}`);
  }

  reserveOgloszenie(ogloszenieId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.post<any>(`${this.apiUrl}/rezerwacja`, { ogloszenie: ogloszenieId }, { headers });
  }
}
