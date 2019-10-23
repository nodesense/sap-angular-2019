// import { CartModule } from './cart/cart.module'; // for code split
import { SharedModule } from './shared/shared.module';
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

import {HttpClientModule} from '@angular/common/http';

// simple route
import {Route, Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '', // default localhost:4200
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    // lazy loading 
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule'
    },

    {
        path: 'products',
        loadChildren: './product/product-routing.module#ProductRoutingModule'
    },


    // end of routes
    {
        path: '**',
        component: NotFoundComponent
    }
];



@NgModule({
    imports: [
        // other module dependencies
        BrowserModule, // Compiler, CommonModule
        FormsModule,
        SharedModule,
    //    CartModule,
        RouterModule.forRoot(routes),
        HttpClientModule
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
        NotFoundComponent,
        // HomeComponent
        // FooterComponent
    ],

    bootstrap: [
        AppComponent, // root component
         
    ]
})
export class AppModule {

}