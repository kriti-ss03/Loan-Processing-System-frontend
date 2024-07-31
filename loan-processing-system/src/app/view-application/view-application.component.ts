import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
// import { ViewApplicationService } from './view-application.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { ViewappsService } from '../viewapps/viewapps.component';
import { ViewappsService } from '../viewapps/viewapps.service';

@Component({
  selector: 'app-view-application',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.scss'
})
export class ViewApplicationComponent implements OnInit {
  applicationForm!: FormGroup;

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
    this.applicationForm = this.fb.group({
      applicationId: [''],
      applicationStatus: [''],
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
      annualSalary: [''],
      workExperienceYears: [''],
      workExperienceMonths:[''],
      designation: [''],
      employerAddressLine1:[''],
      employerAddressLine2: [''],
      employerCity: [''],
      employerState:[''],
      employerPostalCode:[''],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.viewappsService.getApplicationById(Number(id)).subscribe(data => {
        this.applicationForm.patchValue(data);
      });
  }
}
}
