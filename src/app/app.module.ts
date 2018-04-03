import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import {MaterialModule} from './imports/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LandingComponent } from './components/landing/landing.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LandingComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path:'',
                component:LandingComponent,
            },
            {
                path: 'link',
                component: LandingComponent,
            },
            {
                path: '404',
                component: LandingComponent
            },
            {
                path: '**',
                redirectTo: '404'
            },
        ]),
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
