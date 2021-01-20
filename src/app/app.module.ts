import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
	AppComponent,
	MainPageComponent,
	PageNotFoundComponent


  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	HttpClientModule,
	CoreModule,
	SharedModule,
	AppRoutingModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
