import {Component, OnInit} from '@angular/core';


//component --> html tag <app-root> 

@Component({
    // meta info about component, used by angular at runtime

    selector: 'app-root', // html tag/component name
    templateUrl: 'app.component.html', // View
    styleUrls: [  // scopped style for this component
        'app.component.scss'
    ]
})
export class AppComponent implements OnInit {
    appTitle = 'Product App'; // Model 

    constructor() {
        console.log('App component created');
    }

    // called after displaying content in browser
    ngOnInit() {
        console.log('App component init');
    }

}