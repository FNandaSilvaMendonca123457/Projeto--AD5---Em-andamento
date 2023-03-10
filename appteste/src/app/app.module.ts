import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthService } from 'angular-oauth2-oidc/oauth-service';
import { UrlHelperService } from 'angular-oauth2-oidc/url-helper.service';
import { OAuthLogger } from 'angular-oauth2-oidc/types';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule,AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, OAuthService, UrlHelperService, OAuthLogger], 
  bootstrap: [AppComponent],
})
export class AppModule {}
