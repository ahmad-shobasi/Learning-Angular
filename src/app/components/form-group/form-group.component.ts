import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  log(x:any)  {
    console.log(x);
  }
  contactmethod = [
    { 'id':1, 'name':'Email' },
    { 'id':2, 'name':'Phone' }
  ];

  form = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  })
}