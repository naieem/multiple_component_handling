import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  isLoggedIn: boolean;
  constructor() { }
  getAuthSession(): boolean {
    const token = this.getAccessToken();
    if (this.isLoggedIn) {
      return this.isLoggedIn;
    } else if (token) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
  setAuthSession(accessToken: string ): void {
    this.isLoggedIn = true;
    this.setAccessToken(accessToken);
  }
  setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }
  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }
  clearAuthSession(): void {
    this.isLoggedIn = false;
    localStorage.clear();
  }

}
