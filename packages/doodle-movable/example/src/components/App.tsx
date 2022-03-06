import * as React from "react";
import { hot } from "react-hot-loader";
import { MovableShape } from "doodle-movable";
const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
MovableShape
class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <MovableShape>
          <img src={reactLogo.default} height="100" draggable={false}/>
        </MovableShape>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
