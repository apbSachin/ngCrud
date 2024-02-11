import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMessage(message: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, message);
  }
}
