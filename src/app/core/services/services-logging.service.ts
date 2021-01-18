import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServicesLoggingService {
    logStatusChange(status: string): void {
        console.log('A server status changed. New Status: ' + status);
    }
}
