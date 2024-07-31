import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Application {
  applicationId: number;
  firstName:string;
  middleName:string,
  lastName:string,
  submittedDate: Date;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViewappsService {
// <<<<<<< main
  private apiUrl = 'http://localhost:8080/phansbank/v1/viewapps'; // Replace with your actual backend URL
// =======
//   private apiUrl = 'http://localhost:8080/phansbank/v1/viewapps';
// >>>>>>> main

  constructor(private http: HttpClient) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }
  getApplicationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
