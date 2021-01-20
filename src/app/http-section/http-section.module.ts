import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { HttpSectionComponent } from './http-section.component';

@NgModule({
	declarations:
		[HttpSectionComponent, HttpRequestsComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([{ path: '', component: HttpSectionComponent }]),
	],
})
export default class HttpSectionModule {}
