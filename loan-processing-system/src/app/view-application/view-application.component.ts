import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewApplicationService } from './view-application.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-application',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.scss'
})
export class ViewApplicationComponent implements OnInit {
  applicationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private viewApplicationService: ViewApplicationService
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
    this.viewApplicationService.getApplicationData().subscribe(data => {
      this.applicationForm.patchValue(data);
    });
  }
}
