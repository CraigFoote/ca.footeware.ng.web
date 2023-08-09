import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private p: string = "bogie";
    authenticated: boolean = false;

    constructor(private router: Router) { }

    authenticate(p: string): string {
        if (p.toLowerCase() == this.p) {
            this.authenticated = true;
            return "";
        } else {
            this.authenticated = false;
            return "Wrong password";
        }
    }
}