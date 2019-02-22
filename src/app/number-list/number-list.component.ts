import { Component, OnInit } from '@angular/core';
import { NumberService } from "../shared/number.service";

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {
	numberArray =[];
  constructor(private numberService: NumberService) { }

  ngOnInit() {
  	 this.numberService.getNumber().subscribe(
                 (list) => {
                         this.numberArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}

}