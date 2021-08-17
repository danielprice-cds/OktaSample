import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    isAuthenticated: boolean = false;

    constructor(public oktaAuth: OktaAuthService) {
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(
            (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
        );
    }

    async ngOnInit() {
        // Get the authentication state for immediate use
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    }

}