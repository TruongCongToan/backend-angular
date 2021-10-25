import { Students } from './../home/models/Students';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {
//thong bao kieu du lieu lay ve trao doi la json
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
//dinh nghia dia chi server
private REST_API_SERVER = 'https://api-truongcongtoan.herokuapp.com';

//khoi tao httpclient
constructor(private httpClient: HttpClient) {}

//get data of student
public getStudents() {
  const url = `${this.REST_API_SERVER}/api/students`;
  return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
}
//post data 
//co the khai bao luon data loai la : Student da dinh nghia luon
public addStudents(data) {
  const url = `${this.REST_API_SERVER}/api/students`;
  return this.httpClient
    .post<any>(url,data, this.httpOptions)
    .pipe(catchError(this.handleError));
}
//xoa data
public deleteStudent(studentId) {
  const url = `${this.REST_API_SERVER}/api/students/` + studentId;
  return this.httpClient.delete<any>(url).pipe(catchError(this.handleError));
}

//get data of student by maSV
public getStudentsByMaSV(studentId) {
  const url = `${this.REST_API_SERVER}/api/students/`+studentId;
  return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
}

//sua thong tin sinh vien
public modifyStudent(studentId: string, data: Students) {
  const url = `${this.REST_API_SERVER}/api/students/` + studentId;
  return this.httpClient
    .put<any>(url, data, this.httpOptions)
    .pipe(catchError(this.handleError));
}

//in ra loi
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}