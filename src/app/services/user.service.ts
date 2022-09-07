import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath = 'http://localhost:8080/interaction/usuario'

  constructor(private http:HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    if(error.error instanceof ErrorEvent) {
      console.log('An error occured: ', error.error.message)
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`)
    }
    return throwError('Something happened with request, please try again later.')
  }

  login(email: string, password: string):Observable<any> {
    return this.http.get(`${this.basePath}/login/${email}/${password}`)
    .pipe(retry(2),catchError(this.handleError));
  }

  getAllUsers(): Observable<User>{
    return this.http.get<User>(this.basePath)
    .pipe(retry(2),catchError(this.handleError))
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.basePath}/${id}`)
    .pipe(retry(2),catchError(this.handleError))
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.basePath}/${id}`)
  }

  createUser(item: any): Observable<any> {
    return this.http.post<any>(`${this.basePath}`, item)
    .pipe(retry(2), catchError(this.handleError))
  }

  updateUser(item: any): Observable<any> {
    return this.http.put<any>(`${this.basePath}`, item)
    .pipe(retry(2), catchError(this.handleError))
  }
}
