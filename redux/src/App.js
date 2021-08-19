import './App.css';
import Posts from "./components/Posts";
import Postform from "./components/Postform";
// import React, { Component } from 'react';

// export default class App extends Component {
//   componentDidMount() {
//     console.log('I was triggered during componentDidMount')
//   }

//   render() {
//     console.log("hi")
//     return (
//       <div className="App">
//         <Postform />
//         <hr />
//         <Posts />
//       </div>
//     );
//   }
// }


// Old code due to adding a console.log

function App() {
  return (
    <div className="App">
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;