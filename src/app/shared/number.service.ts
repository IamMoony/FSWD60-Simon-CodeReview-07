import { Injectable } from '@angular/core';
//Form Control With Validators
import { FormControl , FormGroup , Validators } from "@angular/forms";

@Injectable({
providedIn: 'root'
})
export class NumberService {

constructor() { }
form = new FormGroup({
 $key: new FormControl(null),
 firstName: new FormControl('', Validators.required),
 laststName: new FormControl('', Validators.required),
 mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),//We add Validators option and we used required so the user must fill the input 
 email: new FormControl('', Validators.email)// to check if the value inside the input is an email
  // here we put an array because we want the user to fill the input and the input length must be at least 8 
     
	});
}
