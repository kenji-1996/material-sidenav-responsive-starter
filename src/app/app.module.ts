import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import {MaterialModule} from './imports/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
