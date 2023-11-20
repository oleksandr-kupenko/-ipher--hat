import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_URL } from 'src/config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {PublicWrapperModule} from "./layouts/public-wrapper/public-wrapper.module";
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../enviroments/enviroments";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PublicWrapperModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: API_URL,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
