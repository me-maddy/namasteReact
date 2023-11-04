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

DAY 7 (#Find the path)

-How useState and useEffect works (Detailed Explaination)
-Creating Routes in React
-Introduction to React Router DOM and it's amazing features
-How to make Route configuration, make an Customized Error page and handle the error using useRouteError() hook
-How to make Children Routes and make the Header Component common for all the Pages
-How to specify the Children Routes in our App using Outlet Component
-Not using Anchor Tags in React and why React is called SPA (Single Page Application)
-Routings in Web Apps and Intro to Dynamic Routing
-Defining Routes for our RestaurantMenu component and dynamic routing
-useParams() hook to get the parameter values from the url

DAY 8 (#Let's get Classy)

1. ✅ Class Components: We delved into the world of class-based components, understanding their structure and how they differ from functional components.

2. ⚡ Lifecycle Insights: Explored the lifecycle methods of class-based components, including constructor(), render(), componentDidMount(), componentDidUpdate(), and componentWillUnmount().

3. 🔄 Constructor Chronicles: Learned how the constructor() method sets up initial states and props, playing a crucial role in component initialization.

4. 🛠️ Handling State: Discovered how to create and manage state variables in class-based components using this.state and this.setState().

5. 📡 Making API Calls: Explored the significance of componentDidMount() for making API calls and performed tasks when a component is already in the DOM.

6. 🚧 Coding Challenges: Tackled hands-on coding challenges, creating class-based components, passing props, and mastering lifecycle methods.

Class-based components offer a deeper understanding of React's foundations and are still relevant in interviews and legacy projects.

DAY 9 (#Optimizing our app)

1. ✅ Custom Hooks: We unlocked the potential of custom hooks, understanding their role in organizing and reusing stateful logic across components.

2. ⚡ Lazy Loading Magic: Explored the concept of lazy loading, which allows us to load components on-demand, significantly improving our app's performance.

3. 🌪️ Suspense Unveiled: Delved into suspense and learned how it enhances the user experience by displaying fallback content during component loading.

4. 🚀 Code Splitting Strategy: Understood the advantages and disadvantages of code splitting and when to use React.lazy() and suspense for optimal app performance.

5. 🤔 Strategic Usage: Grasped when and why we need lazy loading and suspense to streamline our app's loading process.

Optimizing our app is not just about making it faster; it's about delivering a seamless and delightful user experience.

DAY 10 (#Jo Dikhta Hai Vo Bikta Hai!)

In this episode, I have learned some of the important concepts of the User Interface(UI) and resemble on the things of captivating user's interest by means of User Interface.

1. 🛠️ Framework Advantages: Recognizing the benefits of using frameworks, including optimized CSS, a consistent UI, and time-saving components.

2. 🎨 Styling Methods: Exploring various styling methods, such as Native CSS, SCSS, Inline CSS, style-component Libraries, CSS Frameworks, and Styled Components.

3. 🚀 Tailwind CSS Benefits: Embracing the advantages of Tailwind CSS, like on-the-fly styling, reusability, reduced bundle sizes, and flexible UI.

4. 🛠️ Setting Up Tailwind CSS: Learning how to integrate Tailwind CSS into projects, covering installation, configuration, and the use of Tailwind directives.

5. 📐 Choosing the Right Approach: Recognizing the importance of selecting the appropriate styling method based on specific project requirements, weighing factors like maintainability and customization.

6. 💼 Using Multiple Frameworks: Being aware that using multiple frameworks is possible but can lead to inconsistent styling across the application.

DAY 11 (#Data is the new oil)

In this episode, I have learned the concepts of UI layer and Data layer and how Data layer drives the UI layer. Data layer is the crucial part of an application and it actually controls the static UI layer.
In UI layer, we focus only the stylying and provide a good interface to the user. Data layer is responsible for driving the styles and layout of the application. It manages the state of an application using the data.

🏗️ Data's Role: Understand the distinction between the UI layer and the data layer. Data fuels the application, and it's essential to use it wisely.

🔄 Revised State vs. Props: Get a fresh perspective on the roles of state and props in React, shaping component behavior.

🪓 End Prop Drilling: Learn the drawbacks of prop drilling and the importance of avoiding overly complex and lengthy data-passing processes.

📡 Lift State Up: Master the art of "lifting state up" to efficiently share data between components. Create a single source of truth managed by the parent.

🕵️‍♂️ React Developer Tools: Explore the Chrome extension that assists in debugging data, components, and profiling. It supports various state management solutions.

🪀 React Context: Dive into the React Context API, a global state management solution. Learn how to create context, use it with hooks, and apply it in class-based components.

🚩 Debugging Made Easy: Discover how to display the name of a context during debugging using ContextName.displayName. This makes it easier to identify and differentiate contexts.

🧩 Solving Data Challenges: Gain insights into how to manage data efficiently in your React applications, paving the way for a smooth user experience.

DAY 12 (# let's build our store)

- In this episode, I gained one more state management feature through Redux.
- Redux is a state management library that is often used for big applications to handle the state of application.
- We used redux when same state logic is required at multiple positions in an application.
- Grasp the deep understanding of redux and it's working.
- Understand the term store in Redux and how can we create and implement it in the application.
- Understand the terms action, action creators, dispatch, reducers, reducer function, and implementation of reducer functions.

2. Creating a Redux Store: We learned to set up a Redux store using configureStore().

3. Slicing and Dicing the State: With createSlice(), we sliced and diced the state for efficient management.

4. Provider Configuration: We provided the Redux store to our application through <Provider store={}/>.

5. Redux vs. Redux Toolkit: We compared Redux and Redux Toolkit, understanding how Redux Toolkit simplifies complex configurations and reduces boilerplate code.

6. Creating a Cart Workflow: We embarked on building a cart workflow, allowing users to add items seamlessly.
