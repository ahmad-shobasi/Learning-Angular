import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormGroupComponent } from './components/form-group/form-group.component';
import { NavComponent } from './components/nav/nav.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet, 
    FormGroupComponent,
    NavComponent,
    SignupFormComponent
  ]
})


export class AppComponent {
  title:string = 'title'
}
