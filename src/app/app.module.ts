import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Reactive Form Module
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { NumberComponent } from './number/number.component';
import { NumberListComponent } from './number-list/number-list.component';
//Number Service from number.service.ts
import { NumberService } from "./shared/number.service";
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberListComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Form Module
    ReactiveFormsModule,
    //Firebase
  	AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   	AngularFireDatabaseModule, // we will import the classes here too 
    FormsModule
  ],
  //Add provider NumberService
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
