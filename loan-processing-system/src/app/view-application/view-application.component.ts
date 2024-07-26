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

  constructor(
    private route: ActivatedRoute,
    private viewappsService:ViewappsService ,
    private fb: FormBuilder,
    // private viewApplicationService: ViewApplicationService
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
      homePhone: [''],
      officePhone: [''],
      mobile: [''],
      emailAddress: [''],
      employerName: [''],
      annualSalary: [''],
      workExperience: [''],
      designation: ['']
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
