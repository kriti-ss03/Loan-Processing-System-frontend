import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Application {
  applicationId: number;
  applicantName: string;
  submittedDate: Date;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViewappsService {
  private apiUrl = 'https://your-backend-api-url.com/applications'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }
}
