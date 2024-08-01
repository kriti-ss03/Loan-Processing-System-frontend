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

      // id: number,
      // status: string,
      // score: number,
      // declineReason: string,
      // firstName: string,
      // middleName: string,
      // lastName: string,
      // dateOfBirth: Date,
      // maritalStatus: string,
      // ssnNumber: number,
      // loanAmount: number,
      // loanPurpose: number,
      // description: string,
      // addressLine1: string,
      // addressLine2: string,
      // city: string,
      // state: string,
      // postalCode: number,
      // phoneHome: number,
      // phoneOffice: number,
      // phoneMobile: number,
      // emailAddress: string,
      // employerName: string,
      // annualSalary: number,
      // workExperienceYears: number,
      // workExperienceMonths:number,
      // designation: string,
      // employerAddressLine1:string,
      // employerAddressLine2:string,
      // employerCity:string,
      // employerState:string
      id: [''],
      status: [''],
      score: [''],
      declineReason: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      dateOfBirth: [''],
      maritalStatus: [''],
      ssnNumber: [''],
      loanAmount: [''],
      loanPurpose: [''],
      description: [''],
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      phoneHome: [''],
      phoneOffice: [''],
      phoneMobile: [''],
      emailAddress: [''],
      employerName: [''],
      annualSalary: 0,
      workExperienceYears: 0,
      workExperienceMonths:0,
      designation: [''],
      employerAddressLine1:[''],
      employerAddressLine2:[''],
      employerCity:[''],
      employerState:['']
}
