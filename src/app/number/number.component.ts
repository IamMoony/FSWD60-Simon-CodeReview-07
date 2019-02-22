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
	showSuccessMessage: boolean;

	ngOnInit() {
	}

	onSubmit(){
		this.submitted = true;
		if(this.numberService.form.valid){
			if(this.numberService.form.get("$key").value == null ){                    
				this.numberService.insertNumber(this.numberService.form.value);
				this.showSuccessMessage =true;// we set the property to true
				setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
				this.submitted = false;
				this.numberService.form.reset();// the form will be empty after new record created
			} else {
				//update
			}
		}
	}
}
