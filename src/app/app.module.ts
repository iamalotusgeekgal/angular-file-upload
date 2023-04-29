import { BrowserModule } from
	'@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';
//import { MatProgressSpinnerModule } from '@angular/material';

import { FileUploadComponent } from
	'./file-upload/file-upload.component';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from
	'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { GlobalErrorHandler } from './GlobalErrorHandler';
import { HttpRequestInterceptor } from './http-request-interceptor';

@NgModule({
declarations: [
	AppComponent,
	FileUploadComponent,
],
imports: [
	BrowserModule,
	BrowserAnimationsModule,
	HttpClientModule, // required for the actual http request
  	FormsModule, // required for input file change detection
  	ReactiveFormsModule,
	FileUploadModule,
	TableModule,
	DividerModule,
	ProgressSpinnerModule,
	//MatProgressSpinnerModule,
	RouterModule
],
providers: [
	{
        provide: HTTP_INTERCEPTORS,
        useClass: HttpRequestInterceptor,
        multi: true,
     }
],
bootstrap: [AppComponent]
})
export class AppModule { }
