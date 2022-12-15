import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContacteditComponent } from './contactedit/contactedit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatecontactComponent,
    ContactlistComponent,
    ContacteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
