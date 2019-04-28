import React from 'react';
import './App.css';
import character from './characters';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <CharacterList />
        </header>
      </div>
    );
  }
}



export default App;
