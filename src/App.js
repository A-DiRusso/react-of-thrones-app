import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/characters/583');
    this.setState({
      character: response.data
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>name: {this.state.character.name}</li>
          <li>born: {this.state.character.born}</li>
          <li>culture: {this.state.character.culture}</li>
        </ul>
      </div>
    )
  }
}

export default App;