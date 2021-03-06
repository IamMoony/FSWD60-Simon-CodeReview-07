import { Component, OnInit } from '@angular/core';
import { NumberService } from "../shared/number.service";

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
	numberArray =[];
  showDeletedMessage : boolean
  searchText:string = "";
  constructor(public numberService: NumberService) { }

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

onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.numberService.deleteNumber($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

   filterCondition(number){
     return number.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || number.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
   }
 }
