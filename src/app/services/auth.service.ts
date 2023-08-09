import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private password: string = "bogie";
    authenticated: boolean = false;

    constructor(private router: Router) { }

    authenticate(p: string): string {
        if (p.toLowerCase() == this.password) {
            this.authenticated = true;
            return "";
        } else {
            this.authenticated = false;
            return "Incorrect";
        }
    }
}