import { Injectable } from '@angular/core';
//Form Control With Validators
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
	providedIn: 'root'
})
export class NumberService {

	constructor(private firebase: AngularFireDatabase) { }
	numberList: AngularFireList<any>;
	form = new FormGroup({
		$key: new FormControl(null),
		firstName: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required),
		number: new FormControl('', [Validators.required, Validators.minLength(8)]),//We add Validators option and we used required so the user must fill the input 
		email: new FormControl('', Validators.email)// to check if the value inside the input is an email
		// here we put an array because we want the user to fill the input and the input length must be at least 8 

	});
	getNumber(){
		this.numberList = this.firebase.list('number');
		return this.numberList.snapshotChanges();
	}

	insertNumber(number){
		this.numberList.push({
			firstName: number.firstName,
			lastName: number.lastName,
			number: number.number,
			email: number.email
		});
	}
}
