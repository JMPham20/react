import React, { Component } from 'react'; 
import './App.css'; 
import HelloWorld from './HelloWorld';
import Counter from './Counter'; // Import the Counter component

class App extends Component { 

render() { 

 return ( 
 
 <div className="App">
 
 <HelloWorld name={'[John Pham]'}/> 
 <Counter /> {/* Add the Counter component */}
 
 </div> 
 ); 
 } 
} 
export default App;