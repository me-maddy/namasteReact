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

DAY 4 (Food Application) - Practise

-Created food application using reactjs, icons and css.
-do some practise to brush your skills and understand how to use data to control UI of application.
-use of map method of array to render same cart with different data.

-Config Driven UI :- UI can be controlled by the configuration file(send by backend through api). Let's say already define the content, size and position of layout of an application in a config(file) then we can use this config to define the UI of an application and this is known as config Driven UI. As UI of an application is driven by data of Config(file).

Let's suppose we want to run our application in different location, So info that shown by website is differnt and it can be done by config driven UI. Data is fetched by config to define the UI of an application.

-What are props?
It defines as the properties to pass down to child components and this child components receives these properties as props in a parameter of defined component function.

key in react:-
used to uniquely identify the child to optimize the performance of an application.
Key should be unique by which react can identify it to do further changes in an application.
Let's suppose there are five child of react element. Now, key helps react to uniquely identifies each child so that it will not render those childs again if there is addition of new child in a list.

DAY 5 (Improvement in Food Application) -

-Folder Structure to keep clean and readable code
-Imports and Exports(Named and default)
-What are hooks?
Hooks are javascript function that gives power to the react application. They are special function that provides more functionalities and features to the react application.

-State management using useState() hook
UI layer and react state are synced. For example - If there is any change in react state, then this change reflects on Component of that state. That component re-renders to update the UI as state changes of that component.
useState() hook returns an array of two elements. First element is used as state of the component and second element is a function which is used to update the first element(state). React keep an eye on state variable to maintain the state of an application. It basically maintains the changes of the state.

-How react variables are different from normal js variables
-Actual DOM and virtual DOM
-Reconcilliation,diffing and React Fibre
-How UI updates when react state changes
-Events in react

DAY 6 (Let's explore the world)

-Monolith and Microservices
Monolith architecture is a traditional model of software architecture. It is built as a single unified unit that is self-contained and independent of other applications. It is a single service architecture in which all the business logic, UI, backend, and any other jobs are at one place and they are dependent on each other. All the jobs of monolith architecture are written with single code base. If we want to change anything in monolith application, then we need to again deploy the whole application to update the change.

Microservices is a new model of software architecture. This architecture is a collection of multiple independent services.
In this architecture, whole application is separated into multiple independent services and these services can be deployed independently. These services can interact with other services depending on use case. If one service need logic or data of other service then this service interact with other service only when it need it. There might be multiple code base for each service. The collection of all services make a single application and that's a microservices. All concerns(business,UI,backend,database) are separated into multiple independent jobs and interact when there is need.

-useEffect() hook-
This hook is useful to perform side effects in an application. It is mainly used to do API call and fetch data.
This hook accepts two arguments-first is callback function(mandatory) and second is dependency array(optional).
Callback function of this hook is called after complete loading of page and dependency array is used to control invoking of callback function after initial call of this callback function.

-How to add Shimmer UI instead of spinner and how it can impact on one's mind
-Conditional Rendering

DAY 7 (Find the path)

-How useState and useEffect works (Detailed Explaination)
✅ Creating Routes in React
✅ Introduction to React Router DOM and it's amazing features
✅ How to make Route configuration, make an Customized Error page and handle the error using useRouteError() hook
✅ How to make Children Routes and make the Header Component common for all the Pages
✅ How to specify the Children Routes in our App using Outlet Component
✅ Not using Anchor Tags in React and why React is called SPA (Single Page Application)
✅ Routings in Web Apps and Intro to Dynamic Routing
✅ Defining Routes for our RestaurantMenu component and defining dynamic routing
✅ useParams() hook to get the parameter values from the url
