import "./App.css";
import State from "./components/state";



import React, { Component } from 'react';  
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "JavaTpoint",         
      }  
   }  
   render() {  
      return (  
         <div>  
            <JTP jtpProp = {this.state.name}/>             
         </div>  
      );  
   }  
}  
class JTP extends React.Component {  
   render() {  
      return (  
          <div>  
              <h1>State & Props Example</h1>  
              <h3>Welcome to {this.props.jtpProp}</h3>  
              <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>  
         </div>    
      );  
   }  
}  
export default App;  