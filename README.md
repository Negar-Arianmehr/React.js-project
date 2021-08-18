# React.js-project
I am learning React with this app.. This is part of a course of https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture

Reacrjs is a JS library for building user interfaces.
If you consider the Netflix You can see it is easy to work with it, with good user interface, the transition happens pretty much instantly, we dont seem to wait for a new page to load. When we work with some website like Netflix, it might almost feel a bit like a mobile app, even though I am using the website. From bobile apps where use that we have smooth transition that is fun to use that app and things happen instantly. Then traditionally in website, when we, for example, clicked a link or a button, our request was sent to a server and new HTML page was sent back to the browser where then could be displayed. So maybe it has the latency where we wait to open a new page.
It is this request and response cycle, which we can break up with JavaScript, because JS is a programing language that allows us as a developer to run logic in the browser and can do things that manupulate what the user sees. 
JavaScript is following an imperative approach. Because you are giving clear instructions, clear step-by-step instructions, what JS in the browser should be doing.having to write all these instructions is very cumbersome.
React uses something which is called a declarative approach for building this component. A component in react is just a JavaScript function. A special kind of function special regarding what it returns that it does return this JSX code, but other than that,
You will not tell React that a certain HTML element should be created and inserted in a specific placeon the user interface as you would be doing it with Vanilla JavaScript, Instead with React and that's really important, you will always define the desired end state, the target state or possibly also different target states and it's then React's job to figure out which elements on the actual webpage might need to be added or removed or updated. And you don't write these concrete DOM updating instructions on your own as you would be doing it with just JavaScript, with React and React component you just define these end states and under which consitions which state should be used and then React will do all of the rest under the hood...and in the end, we just build our own custom HTML Elements and we combined them together for building a user interface.

JS in the browser is able to manipulate to so-called Dom, the HTML elements that are rendered onto the screen. We can manipulate this with JS. That allows us to change what the users see without fetching a new HTML page. So we dont need to request a new HTML page just to present something different to the user. on the other hand When we use just JS we have to write code for every part, is called an imperative approach. React code runs in the Browser.
# Why ReactJS
So Reactjs as a JS library is an extra building block and it is alll about building modern reactive user interfaces for websites. React makes building complex, interactive and reactive user interfaces simple. React embraces a concept called components, Because all user interfaces in the end are made up of components. Components are reusable building blocks in your user interface, and in the end are a combination of HTML code, Css code for styling and possibly JS code for some logic. It uses because of reusable contant and separation of contants an ddont repeat them. You can split your code into multiple small functions
We want to use Reactjs because it makes building modern, rich, complex user interfaces easeir, with a higher level syntax, where we write code in a declarative way, in a declarative component-focused way, we define what we wanna have on the screen. That is why we use the thecnology or framworks like react.
#What we want to learn
-Component-DrivenUser Interfaces
-Building Interactive and Scalable UIs
-A feature called JSX or a special syntax called JSX
-working with Components
-wWrorking with Data
# Creating a new React Project
We have a single html page that we see on the screen constantly changes because of areact. The easiest way of getting started with a React project is to use a tool called Create React App. We can find it in github or creat-React-app.dev. So this is a tool to create a react project, which are basically pre-configured folders with some basic React code files and most importantly a bunch of configuration files which help you build that React App for production use because it turns out that there will be a couple of transformation and optimization steps between developing any React App and running a React App in production but more on that later, And in addition, this project which is created with Create React App, will give you a nice development environment with a development web server which allows you to preview the application locally on your machine.
And it will allow you to preview this applicationin a way where the browser will automatically update the page whenever you make changes in your code and so on.
You need node.js for run this app with some commands.
After install npm, we must run NPM start. We should use it all to keep that development server running as long as we are working on the code, it will automatically update the loaded page in the browser.
# Starting to write codes
W created the required files for writing codes.So we start with index.js, there are import ReactDOM from "react-dom" (That is a library we can see in package.json), css, and App. We can see ReactDOM.render(...)[This is render method] in this file. This is actually the first file which will be executed whenever this page is loaded. The render method get two argument. The first argument is whatever we want to rendder to html page.  The second argument is a default JavaScript DOM API. we use getElementBy Id to select a certain DOM HTML element by its ID from the index.html file from public folder.
The code that we see here, will transform and optimize behind the seence.
Basically we will write to code, in a easy to read developer friendly way with some syntactic sugar, which makes our life as a developer easier, but we'll write code which wouldn't run like this in the browser, and especially not in all supported browsers. Therefore the npm start process, which we started here, which started this development server, which is watching our code, this process will not just watch our code and then take it and deliver it to the browser, but before it delivers it, it will transform it.

<App /> : This is like HTML code that write in JS code. It will be work only because this is transformed before it is delivered to the browser. This is ipport App from ./App(App.js). That is not regular JS syntax here. This is a syntax called a JSX. When we go to the App file we can see a trivial file that in inclulded a function named App that is exported for using in the another file.
In this function You can see a html code that is not regular in HS, but it is inverted by React team.
# What is the JSX 
We got a JSX code that is basically HTML code inside of JS. Indeed, JSX stands dor JavaScript XML, because HTML in the end is XML. It works because of behind screen and npm start process.

#Building Components
We build a component file and give it a name and add a function in it with JSX syntax. When we want to add it to main App.js we import it and write it as a element in the JSX. this is a customer component and we have to use the name which we use in import as a name for element. Because that is how conection is established.
Whereas elements starting with an uppercase character are element defines by you or some other developer<ExpenseItem />.
#Passing Data via "Props" :
We can pass data to the custom component by adding a attribute. And inside of that component, we can then get access to all these attributes which might have been set on our custom component. Again, we're basically building our own custom HTML elements. And just as HTML elements can have attributes, it turns out that with React, our own custom components can also have attributes.There, this concept is just called props instead of attributes. And **props simply stands for properties**. We can set properties of our own custom components. Props are really important, because it allows you to make your components reusable, and it allows you to pass data from another component to this component.

#composition
We build all these components to then build a user interface and we are already doing that. In App.js we're using Expenses, in there we are using ExpenseItem, in there we're using ExpenseDate. Generally, this approach of building a user interface from smaller building blocks is called composition. What if we wanted to create a component which actually just serves as a shell around any kind of other content.
When you use custom componenrs as wrapers, you can not see the content. But we want to use a reusable wraper so we put in wraper div a **{props.children}**. Children is a reserved name. and the value of this special children prop will always be the content between the opening and closing tags of your custom component. This property is now a custom component defined by you. now we have this reusable wrapper component.

 

