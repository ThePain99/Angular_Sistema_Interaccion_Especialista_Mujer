import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  basePath = 'http://systeminteraction-env.eba-t2my3i7r.us-east-1.elasticbeanstalk.com/interaction/paciente'
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

  getPatientById(id: number): Observable<any>{
    return this.http.get<any>(`${this.basePath}/${id}`)
    .pipe(retry(2),catchError(this.handleError))
  }

  getAllPatientsByUserId(userId: number): Observable<any>{
    return this.http.get<any>(`${this.basePath}?usuarioId=${userId}`)
    .pipe(retry(2),catchError(this.handleError))
  }

  deletePatientByIdAndUserId(userId: number, id: number): Observable<any> {
    return this.http.delete<any>(`${this.basePath}/${id}?usuarioId=${userId}`)
  }

  createPatient(item: any): Observable<any> {
    return this.http.post<any>(`${this.basePath}`, item)
    .pipe(retry(2), catchError(this.handleError))
  }

  updatePatient(item: any): Observable<any> {
    return this.http.put<any>(`${this.basePath}`, item)
    .pipe(retry(2), catchError(this.handleError))
  }

  /*
  getPatientById(id: number): Observable<Patient>{
    return this.http.get<Patient>(`${this.basePath}/${id}`)
    .pipe(retry(2),catchError(this.handleError))
  }
  */
}
