import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { LoggingInterceptorService } from './services/interceptors/logging-interceptor.service';

@NgModule({

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }],

})
export class AppModule { }
