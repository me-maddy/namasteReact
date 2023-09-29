React - Javascript library used to build web applications

DAY - 1
First - How to add react using cdn links
You can use react in script tag or a separate file using cdn links.
React.createElement() => This function is used to create React Elements.
ReactDOM.createRoot() => This func is used to create root where you can render your application.
render() => This func is used to render(run) your application in browser.

DAY - 2

Bundler: used to pack our code into single file or bundle and provide lots of functionalities to optimize the performance of an application.
Parcel : Bundler that is used to minify,compress, and tree shake the application. Provides a faster experience to build and deploy the application.

                          Features of Parcel
                          1. Hot Modular Replacement
                          2. Minification
                          3. Compression
                          4. File Watching Algorithm
                          5. Tree Shaking
                          6. Image Optimization
                          7. Lazy Loading
                          8. Bundler sharing
                          9. Browser Compatibility
                          10. Caching
                          11. Development Server
                          12. Optimization
                          13. Https and so on....

Transitive dependencies: Dependemcies which depends on other depencies are known as transitive dependencies.
dev-dependencies : Dependencies which used only in development but not on production.

npm & npx : npm is used to manage packages and it's a repository to maintain javascript packages but it can't execute package until package is not installed and mentioned in package.json.
npx have that power to execute npm package even without installed it. npx is used to execute npm package.

.gitignore : This is used to ignore files to upload on github. Developers don't upload those files which can be regenerated. node_modules should not be uploaded on github because it can be regenerated on server side using npm commands.

^ & ~ : Both used with the version of package/dependency. '^' is used in package.json file to do upgrade of minor updation of package/dependency. '~' is used to do upgrade of major updation of package/dependency.

Tree shaking : It is a good functionality to optimize the performance of an application. With this tool, unused code will be removed and necessary code will be run so that user will get faster experience. Let's suppose we have 20 functions but we need 2 functions to run some part of an application then other unused functions will be removed by parcel and only necessary code will be run.

Hot Modular Reloading : When there is any change in any file then parcel will rebuild changed file/code and then give indication to server to do replacement of module so that application on browser do changes without reloading a page. It is useful to retain the state of an application.

package-lock.json: used to lock the exact versions of package/dependencies. It is used to set exact versions of packages/dependencies and configuration of an application. With the help of this file, developer will not face any problem on production side regarding execution of application.

DAY 3 -

JSX: It is a html like syntax but not a html. It is used to provide easier developer experience, readability,maintaibility, less and secure code, and no repeatition. It does sanitization to run application safely.JSX doesn't run malicious data that comes from malicious(dangerous) file

Does browser understand JSX?
No, Browser doesn't understand jsx, only understand html.
Actually, Babel converts jsx into React.createElement(). After that, react understand the code and create React Elements and then convert it into html element before rendering in the browser.

JSX => React.createELement() => React element(js object) => Html

Babel: used to transform newer javascript code(ES2015+) into the code supported by older browsers. Old browsers doesn't support newer syntax of javascript. To make them support in older browsers, babel transformed newer javascript into older javascript supported by older browsers. Developers use babel to make sure to run javascript in older browser versions.
To convert newer javascript syntax into older javascript syntax, known as polyfill.

Component: Everything in React Application is React Component. React Application splits into many react components and developer can handle a component independently. Components are independent in nature.

There are two ways to write components-

1. Class Components
2. Functional Components

Today, we mainly used functional components because of easier and readable syntax. Functional components are nothing but a javascript function that returns react elements.

Component Composition: When we use components inside another component. That is what we called component composition.

Note:- Inside JSX syntax, javascript can be execute using curly braces{}.
