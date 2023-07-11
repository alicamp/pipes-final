import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { PipeModule } from './pipes/pipes.module';
import { RxModule } from './rx/rx.module'; 
import { CascadeDropdownsModule } from './forms/cascade-dropdowns.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { CheckRoleGuardGuard } from './check-role-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HomeModule,
    AboutModule,
    PipeModule,
    RxModule,
    CascadeDropdownsModule
  ],
  providers: [CheckRoleGuardGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
