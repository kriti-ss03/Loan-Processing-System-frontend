import { Component, OnInit } from '@angular/core';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


// add 
interface ApplicationData {
  // Define your data structure here
  firstName: string;
  lastName: string;
  middleName:string;
  dob:Date;
  email:string;
  // ... other fields
}

@Component({
  selector: 'app-submitloan',
  standalone: true,
  imports: [SubmitSuccessComponent, RouterLink, ReactiveFormsModule,  CommonModule],
  templateUrl: './submitloan.component.html',
  styleUrl: './submitloan.component.scss'
})
export class SubmitloanComponent implements OnInit {
  checkSubmit= false;

  // this is of no use now, later on remove the onSubmit() function from the html file and this file as well
  OnSubmit(){
    console.log("the button is clicked")
    // this.checkSubmit=true;
  }
  applicationForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  formErrors: string[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.applicationForm = this.fb.group({
      // by adding these validators here, we can make sure that user has to put the data inside the field
      //  and then after that if we want to put the check on it we can add the conditional statements in the html file
      firstName: ['', [Validators.required, Validators.maxLength(255)]],
      middleName: ['', Validators.maxLength(255)],
      lastName: ['', [Validators.required, Validators.maxLength(255)]],
      dateOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      ssnNumber: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      loanPurpose: ['', Validators.required],
      description: [''],
      addressLine1: ['', [Validators.required, Validators.maxLength(255)]],
      addressLine2: ['', Validators.maxLength(255)],
      city: ['', [Validators.required, Validators.maxLength(255)]],
      state: ['', [Validators.required, Validators.maxLength(255)]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      homePhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      officePhone: ['', [Validators.pattern('^[0-9]{10}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emailAddress: ['', [Validators.required, Validators.email]],
      employerName: ['', Validators.required],
      annualSalary: ['', Validators.required],
      workExperienceYears: ['', Validators.required],
      workExperienceMonths: ['', Validators.required],
      designation: ['', Validators.required]
    });
  }

  submitForm() {
    this.formErrors = [];
    if (this.applicationForm.valid) {
      const applicationData: ApplicationData = this.applicationForm.value;
      console.log(applicationData)
      this.checkSubmit=true;
      this.http.post('http://localhost:5000/appl', applicationData) // Replace with your API endpoint
        .subscribe(
          (response) => {
            // console.log('Application submitted successfully:', response);
            this.successMessage = 'Application submitted successfully!';
            this.errorMessage = null;
            this.applicationForm.reset(); // Optionally reset the form
          },
          (error) => {
            console.error('Error submitting application:', error);
            this.errorMessage = 'Error submitting application. Please try again.';
            this.successMessage = null;
          }
        );
    }
    else {
      this.displayErrors();
    }
  }
  displayErrors() {
    for (const control in this.applicationForm.controls) {
      if (this.applicationForm.controls[control].invalid) {
        this.formErrors.push(control);
      }
    }
  }
  
}
