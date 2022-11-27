import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${BASE_PATH}`);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${BASE_PATH}`, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${BASE_PATH}/${user.id}`, user);
  }

  deleteUser(user: IUser): Observable<IUser> {
    return this.http.delete<IUser>(`${BASE_PATH}/${user.id}`);
  }
}

export interface IUser {
  id?: number;
  name: string;
  surname: string;
}
