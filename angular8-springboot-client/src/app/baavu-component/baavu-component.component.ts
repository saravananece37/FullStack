import { Component, OnInit, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl,Validators,FormGroup,FormArray} from '@angular/forms';

@Component({
  selector: 'app-baavu-component',
  templateUrl: './baavu-component.component.html',
  styleUrls: ['./baavu-component.component.css']
})

@NgModule({
imports: [ ReactiveFormsModule]

})
export class BaavuComponentComponent implements OnInit {

  angForm:FormGroup;
  constructor() {
    this.angForm= new FormGroup({
        names:new FormControl('',Validators.required),
        age:new FormControl('',Validators.required),
      });
   }

  ngOnInit() {
  }
  onSubmit()
  {
    console.log(this.angForm);
    console.log(JSON.stringify(this.angForm.getRawValue()));


  }
  submitted=false;

}
