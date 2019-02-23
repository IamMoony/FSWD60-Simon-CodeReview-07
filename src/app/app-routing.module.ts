import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportnumbersComponent } from './importnumbers/importnumbers.component';
import { DatalistComponent } from './datalist/datalist.component';
import { NumberComponent } from './number/number.component';

const routes: Routes = [
	{path: 'import', component: ImportnumbersComponent},
	{path: 'datalist', component: DatalistComponent},
	{path: '', component: NumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ImportnumbersComponent, DatalistComponent, NumberComponent]
