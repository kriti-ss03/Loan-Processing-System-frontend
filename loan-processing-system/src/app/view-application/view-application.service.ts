// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ViewApplicationService {
//   private apiUrl = 'https://api.example.com/loan-application'; // Replace with your API URL

//   constructor(private http: HttpClient) {}

//   getApplicationData(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }
// }
export interface Application {
 
    id: number,
    status: string,
    score: number,
    declineReason: string,
    firstName: string,
    middleName: string,
    lastName: string,
    dateOfBirth: Date,
    maritalStatus: string,
    ssnNumber: number,
    loanAmount: number,
    loanPurpose: number,
    description: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    postalCode: number,
    phoneHome: number,
    phoneOffice: number,
    phoneMobile: number,
    emailAddress: string,
    employerName: string,
    annualSalary: number,
    workExperienceYears: number,
    workExperienceMonths:number,
    designation: string,
    employerAddressLine1:string,
    employerAddressLine2:string,
    employerCity:string,
    employerState:string
}
