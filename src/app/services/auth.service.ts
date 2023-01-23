import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private u: string = "foote";
    private p: string = "bogie97";
    authenticated: boolean = false;

    constructor(private router: Router) { }

    authenticate(u: string, p: string): string {
        if (u == this.u && p == this.p) {
            this.authenticated = true;
            return "";
        } else {
            this.authenticated = false;
            return "Wrong username or password";
        }
    }
}