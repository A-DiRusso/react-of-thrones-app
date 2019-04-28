import React from 'react';
import './App.css';
import characters from './characters';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <CharacterList characters={Object.keys(characters[0])}/>
            
        </header>
      </div>
    );
  }
}



export default App;
