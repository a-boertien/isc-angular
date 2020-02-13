import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Payee } from './';
import { throwError, Observable } from 'rxjs';
import { catchError  } from 'rxjs/operators'

const baseUrl = 'http://localhost:8000/api/v1/banking/payees';

@Injectable({
  providedIn: 'root'
})
export class PayeesDaoService {
  constructor(public client: HttpClient) {}

  getAllPayees(): Observable<Payee[]> {
    return this.client.get<Payee[]>(baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getPayeeById(id: string) {
    return this.client.get<Payee>(`${baseUrl}/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client side error with no http response
      console.error('Network issues, could not get a response');
    } else {
      // Got an http response >= 400
      console.error("The server didn't like that request.");
    }

    return throwError({
      message: 'DAO Error'
    });
  }
}
