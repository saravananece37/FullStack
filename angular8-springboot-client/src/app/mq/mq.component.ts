import { Component, OnInit } from '@angular/core';
import  {ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';
import {Publish} from './publish';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-mq',
  templateUrl: './mq.component.html',
  styleUrls: ['./mq.component.css']
})

export class MQComponent {

  messageDetails:Publish;

  angForm:FormGroup;
  constructor(private employeeService: EmployeeService) {

    this.angForm= new FormGroup({
        routingKey:new FormControl('',Validators.required),
        message:new FormControl('',Validators.required),
      });

      this.messageDetails=new Publish();
   }

  onSubmit()
  {
    //this.messageDetails = this.angForm.value;
  //this.messageDetails=Object.assign({}, this.angForm.value);
    //this.messageDetails.Publish = Object.assign({}, this.messageDetails.Publish);
//this.messageDetails=JSON.stringify(this.angForm.getRawValue());
    console.log(this.messageDetails);
    this.employeeService.createMQ(this.messageDetails)
    .subscribe(data => console.log(data), error => console.log(error));

  }

}
