import './App.css';
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import { Provider } from "react-redux";
import store from './store'
// const store = createStore(() => {}, {}, applyMiddleware());
// the above is dummy code for the store

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
    <Provider store={store}>
      <div className="App">
          <Postform />
          <hr />
          <Posts />
      </div>
    </Provider>
  );
}

export default App;