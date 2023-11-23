import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, FormControl, Validators,ReactiveFormsModule, } from '@angular/forms';
import { userNameValidation } from './userName.validators';

@Component({
  selector: 'signup-form',
  standalone:true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  form = new FormGroup({
    userName: new FormControl('', 
    [
      Validators.required,
      Validators.minLength(4),
      userNameValidation.cannotContainSpace
    ]
    ),
    password: new FormControl('', Validators.required),  
  });

  get userName(){
    return this.form.get('userName');
  }
}
