import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Users } from "../models/users";
import { catchError, retry}  from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  private apiURL = `http://systeminteraction-env.eba-t2my3i7r.us-east-1.elasticbeanstalk.com/interaction/paciente`;
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

  getPatientsByUserId(userId : number):Observable<any> {
    return this.http.get(`${this.apiURL}/?${userId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getPatientsById(id : number):Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

}
