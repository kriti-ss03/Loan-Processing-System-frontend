import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
// import { ViewApplicationService } from './view-application.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { ViewappsService } from '../viewapps/viewapps.component';
import { ViewappsService } from '../viewapps/viewapps.service';
import { CommonModule } from '@angular/common';
import { Application } from './view-application.service';

@Component({
  selector: 'app-view-application',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.scss'
})
export class ViewApplicationComponent implements OnInit {
  // applicationForm!: FormGroup;
  application!: Application;
  declineRules:string[] =[];
  applicantAge!:number
  applicantSalary!:any
  applicantExp!:number

  // @Input({required:true}) userId!:number
  // i have a option of changing thw way how i take the data from backend and display on client side
  // currently i am going witht the form method but if this dosent work, then i can make the interface ofn application form and take the values similar to the one i did in viewapps code
  // or this can be done vis a versa also.
  constructor(
    private route: ActivatedRoute,
    private viewappsService:ViewappsService ,
    private fb: FormBuilder,
    // private viewApplicationService: ViewApplicationService
    // try changing and checking the fields accordingly after integration of backend with frontend
  ) {
    // this.applicationForm = this.fb.group({
    //   applicationId: [''],
    //   applicationStatus: [''],
    //   score: [''],
    //   declineReason: [''],
    //   firstName: [''],
    //   middleName: [''],
    //   lastName: [''],
    //   dateOfBirth: [''],
    //   maritalStatus: [''],
    //   ssnNumber: [''],
    //   loanAmount: [''],
    //   loanPurpose: [''],
    //   description: [''],
    //   addressLine1: [''],
    //   addressLine2: [''],
    //   city: [''],
    //   state: [''],
    //   postalCode: [''],
    //   phoneHome: [''],
    //   phoneOffice: [''],
    //   phoneMobile: [''],
    //   emailAddress: [''],
    //   employerName: [''],
    //   annualSalary: [''],
    //   workExperienceYears: [''],
    //   workExperienceMonths:[''],
    //   designation: [''],
    // });
  }

  ngOnInit(): void {

    this.declineRules=[];
    // this.declineRules.push("this is a string")
    console.log(this.declineRules)
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.viewappsService.getApplicationById(Number(+id)).subscribe(data => {
        this.application = data
      });
      
      // this.applicantSalary = this.application.annualSalary ;
      // this.applicantExp = this.application.workExperienceYears*12 + this.application.workExperienceMonths;
      // this.applicantAge = 22
      // if(this.applicantSalary<10000){
      //   this.declineRules.push("Annual salary is less than $10,000")
      // }
      // if(this.applicantExp<6){
      //   this.declineRules.push("Working exprience is less than 6 months")
      // }
      // if(this.applicantAge<18&&this.applicantAge>65){
      //   this.declineRules.push("Age is not in the range of 18 to 65")
      // }
      // console.log(this.declineRules)
  }
  console.log(this.application)
}
}
