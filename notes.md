-- Node.js
-- Visual Studio Code
-- Angular Cli

command prompt

node -v
ng -v


For Angular 8/node 10.9
sudo npm install @angular/cli   -g

For Angular 7/node 8.x
sudo npm install @angular/cli@^7.0.0   -g


> ng new product-app

> cd product-app

> ng serve

[say N for router]
[Select SCSS]

then open browser http://localhost:4200

--

html files for views
    Angular compiler convert HTML to JavaScript files

        home.component.html ==> JavaScript File

Where it compiles
        Inside the Browser : JIT - Just In Time Compilation, at module loading time
                        Development time
                        Compiler @angular/compiler is shipped to browser
                        In Browser, No TypeScript
                        HTML to TS TypeChecking is not possible

                        JIT = HTML ==> JS

        At Build Time: AoT - Ahead of Time 
                                Build time
                                node.js available, TypeScript is available
                                Production
                                compiler code is not SHIPPED

                                AOT = HTML ==> TS ==> JS

