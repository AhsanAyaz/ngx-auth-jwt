import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {
  _token: string = null;
  constructor() { }

  getToken() {
    return this._token;
  }

  setToken(token: string) {
    this._token = token;
  }

  isLoggedIn() {
    return !!this._token;
  }

  isTokenValid() {
    // put your validation logic here
    return true;
  }
}
