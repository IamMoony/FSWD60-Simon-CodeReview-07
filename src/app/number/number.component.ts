import { Component, OnInit } from '@angular/core';
import { NumberService  } from "../shared/number.service";


@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor(private numberService: NumberService) { }
	submitted: boolean;
	formControls = this.numberService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
 this.submitted = true;
   if(this.numberService.form.valid){
         if(this.numberService.form.get("$key").value == null ){ // here we said that if the value of the hidden input is null and it's by default null we will insert a new customer
                 // insert
   this.submitted = false;
         } else {
                 //update
         }
   }
 }
}

