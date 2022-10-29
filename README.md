#	REACT.JS
***
##	What is React.js
React Js is an open-source, component based  front end responsible for the view layer of application. It was Released in 2013 and  maintained by Facebook. <br/>
ReactJs uses virtual Dom based mechanism to fill in data(views) in HTML DOM. Using virtual Dom is fast since it changes individual Dom components instead of reloadinf the whole DOM everytime.<br/>
***
###	REACT JSX
JSX is an XML extensible language supporting HTML syntax with little modification. This enables us to create virtual DOM using Javascript and XML
There are various ways we can use JSX:
1.	Assign Varibale
```
	var greeting = <h1> Hello TItus </h1>
```
2.	Assign Variable based on condition
```
	var morning = true;
	if (morning) {
		greeting = <h1> Hello GoodMorning </h1>
```
3.	Return a function
```
	function Speak() {
		return <h1> I'm Just a computer </h1>
	}
	talk = Speak()
```
4.	Used as argument of function
```
function Greet(message) {
		ReactDom.render message , document.getElementById('I react fast ')
	}
	Greet(<h1> Hello Titus </h1> )
```
####	Expressions
Expressions in JSX are in pure Javascript which has to be enclosed in `curly braces` and can contain variables
```
	var today = newDate().toTimeString();
	ReactDom.Render(
		<div> 
			<p> The current time today is {today} </p>
		</div>
		document.getElementById('time')
```
####	Attributes
JSX supprts html like attributes and has to be specified using camelCase convention.<br/>
It follows Javascript DOM API where instead of using normal `class` we use `className`, `onClick` instead of `onclick`
### Expressions in  Attributes
We can use expressions in atributes where they are enclosed by quotation
```
	color = "red";
	ReactDom.Render(
		<div> 
		 <p className = {color}> Hello World </p>
```

***
### 	REACT COMPONENTS
Components are building blocks of a react application.
Its functionalities are:
-	Initial Render of User Interface
-	Management and Handling events
-	Update User Interface when UI is changed
They represent small chunc of User Interface in an React Application in web page.Its __Primary__ job is to render UI and update it whenever its internal state is changed, and manages the event belonging to User interface.<br/>
They accomplish features using:
1. Properties: Enables Component to receive input
```
	class Hello extends React.Component {
		 render() {
			  return <h1>Hello, {prompt("Enter your Name"}!</h1>
				   }
	}
```
2. Events:Enable Components to manage DOM events and user-interaction
```
	class Hello extends React.Component {
	 render() {
	  return <button onClick = {this.string}> Change Text </button>
	   }
	}
```
3. State: This enables component to be stateful. Statefull component updates Ui with Respect to state.
###	Creating React component
1.	Functional component: <br/>
- This uses plain Javascript Function.
- Its only requirement is to return a React element
- They do not support state management , but react  __hooks__ provides `useState()` for the function component to maintain states
- They do not have life cycle, but react __hooks__ provides `useEffect` for it to access different stages of the component.
```
	function sellItems(){
		return(
				<div>
					<p> This is a react fuctional component </p>
				</div>
		      );
	}
2.	Es6 Class Components
- They support state management out of box.
- They have life cycle and access each life cycle by dedicated API's
```
	import React, {Component} from 'react';
	
	class SellItems extends Component{
		render(){
				return(
					<div>
						<p> This is a react class component </p>
					</div>
				      );
		}
	}
SellItems is a class __component__ declaration in  Es6. We can use it as an element anywhere in our apllication> It will produce __instance__ of the component i.e the component gets instantiated. __Element__ it returns in render() method is what the component is made of.</br>
Compomemts can receive __props__ which are properties passed by it's parent to specify some values which cant be known to component only. <br/>
Props are accesed through the props object on component itself .
```
	import React from 'react'
	class Great extends React.component{
		render(){
			name = alert("Enter your name")
			return <h2> Hello {this.props.name}! </h2>
		}
	}
export default Hello
```
Component can be rendered within any other components or directly into the DOM if topmost component is using `ReactDOM.render` and providing it with DOM we want to render
### Styling
The react components can be styled using className attribute. Since JSX is supported we can use:
- CSS stylesheet: Normal CSS with className
- Inline styling: They use as Javascript objects  with camelCase properties
- CSS Modules: These are locally  scoped styles.
- Sass Stylesheet
- Post processing stylesheet: convert styles to normal css at build time
####	CSS Modules
This  is safest way to and easiest way to define a style. CSS modules converts all styles converts all styles into locall scoped styles to avoid name conflicts when importing styles <br/>
styles.module.csfiles
```
	div.itemStyle {
		color: "brown";
		font-size:14px;
	}
```
Using it in a react app.
```
	import styles from '/style.module.css'
	<div className = {styles.itemStyle}>
```
####	Inline styling
It declares styles as Javascript objects using DOM based css properties and set it to component through style Attributes
```
	itemStyle = {
	color: "red";
	font-size: '14px';
```
Using it in our component
```
	render() {
		return (
				<div style = {this.itemStyle}>
		       );
	}
```

## REACT PROPS


