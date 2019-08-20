import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

class App extends React.Component {
  handleClick() {}

  handleChange(e) {
    console.log("cambie");
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={e => this.handleChange(e)} />
          <Button title={"click me"} />
          <Button title={"borrar"} />
          <Button title={"holi"} />
        </header>
      </div>
    );
  }
}

export default App;
