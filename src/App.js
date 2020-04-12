import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    this.setState({ kitties: users });
  }

  // This is used so as to bind the keyword 'this' to the context who declared
  // the current method (handleChange in this case). handleChange is now bound
  // to this component as a method, and 'this' is actually the class.
  // Other way is setting this.handleChange = this.handleChange.bind(this) on
  // the constructor or use this as an arrow function where the method is being
  // called.
  // When the component is run for the first time it defines the arrow function
  // and binds it to where it's defined (this class). This is called
  // Lexical Scope.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { kitties, searchField } = this.state;
    const filteredKitties = kitties.filter((kitty) =>
      kitty.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Kitties Rolodex</h1>
        <SearchBox
          placeholder={"Search kitties..."}
          onChange={this.handleChange}
        />
        <CardList kitties={filteredKitties} />
      </div>
    );
  }
}

export default App;
