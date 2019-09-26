import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private httpClient: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
      'Accept': 'text/plain'
    })
  }

  public process(cmdRequest): Observable<any> {
    return this.httpClient.post('https://cube-sum-service.herokuapp.com/CubeSumService/process', cmdRequest, {responseType: 'text'})
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  // Error handling
  errorHandl(error) {
    console.log(error);
    return throwError(error);
 }
}
