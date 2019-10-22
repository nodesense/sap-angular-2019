import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        // other module dependencies
        BrowserModule, // Compiler, CommonModule
        FormsModule,
        // CartModule
        // SharedModule
    ],

    declarations: [
        // set of components, directives, pipes
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        CounterComponent,
        HeaderComponent,
        FooterComponent,
        // HomeComponent
        // FooterComponent
    ],

    bootstrap: [
        AppComponent, // root component
         
    ]
})
export class AppModule {

}