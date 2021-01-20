import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
	public loggedIn = false;

	public isAuthenticared(): Promise<any> {
		const promise = new Promise(
			(resolve, reject) => {
				setTimeout(() => {
					resolve(this.loggedIn);
				}, 800);
			});

		return promise;
	}

	public login(): void {
		this.loggedIn = true;
	}

	public logout(): void {
		this.loggedIn = false;
	}
}
