import './App.css';
import React, {Component} from 'react';
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import Checkbox from "./components/Checkbox"
import GitHubUser from './components/GitHubUser';
import { Provider } from "react-redux";
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* try user: nwscott81 */}
          <GitHubUser login="mariohernandezk10" />
          <hr />
          <Checkbox />
          <hr />
          <Postform />
          <hr />
          <Posts />

        </div>
      </Provider>
    );
  }
}

export default App;