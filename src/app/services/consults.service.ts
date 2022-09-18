import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Users } from "../models/users";
import { catchError, retry}  from "rxjs/operators";
import {Consults} from "../models/consults";

@Injectable({
  providedIn: 'root'
})
export class ConsultsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  private apiURL = `https://interaction-specialist.uc.r.appspot.com/interaction/consulta`;
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse)
  {
    if (error.error instanceof ErrorEvent) {
      //Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      //Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  create(consult: Consults):Observable<any> {
    return this.http.post(this.apiURL, JSON.stringify(consult), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  update(consult: Consults):Observable<any> {
    return this.http.put(this.apiURL, JSON.stringify(consult), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  delete(id : number):Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  getConsultsByUserId(userId : number):Observable<any> {
    return this.http.get(`${this.apiURL}/?${userId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


}
