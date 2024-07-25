import { Component } from '@angular/core';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-submitloan',
  standalone: true,
  imports: [SubmitSuccessComponent, RouterLink],
  templateUrl: './submitloan.component.html',
  styleUrl: './submitloan.component.scss'
})
export class SubmitloanComponent {
  checkSubmit= false;


  OnSubmit(){
    console.log("the button is clicked")
    this.checkSubmit=true;
  }
}
