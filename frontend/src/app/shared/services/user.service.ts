import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  createUser(dataUser: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/user`, dataUser);
  }

  getUser(idUser: string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/user/${idUser}`);
  }
}
