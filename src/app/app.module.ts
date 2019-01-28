import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NavComponent } from './view/nav/nav.component';
import { StudentComponent } from './view/student/student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentService} from './services/studentService';
import {HttpClientModule} from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    StudentComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
