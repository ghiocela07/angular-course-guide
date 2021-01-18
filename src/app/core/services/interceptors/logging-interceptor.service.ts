import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoggingInterceptorService implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Outgoing request');
        console.log(request.url);
        console.log(request.headers);

        return next.handle(request).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log('Incoming respose');
                console.log(event.body);
            }
        }));
    }
}
