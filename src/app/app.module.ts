import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuthModule, OktaConfig, OKTA_CONFIG } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

export function initOkta(): OktaConfig {
    return {
        issuer: 'https://${yourOktaDomain}/oauth2/default',
        redirectUri: window.location.origin + '/code/callback',
        clientId: '{clientId}',
        pkce: true,
        scopes: [
            'openid',
            'profile',
            'email',
            'address',
            'phone',
            'offline_access'
        ]
    };
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OktaAuthModule
    ],
    providers: [{ provide: OKTA_CONFIG, useFactory: initOkta }],
    bootstrap: [AppComponent]
})
export class AppModule { }
