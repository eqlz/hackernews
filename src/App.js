import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    var user = {
      firstName: "eli",
      lastName: "zhang"
    };

    var element = <div className="App"><h2>hello {formatName(user)}!</h2></div>;

    return (
      element
    );
  }
}

export default App;
