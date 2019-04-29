import React from 'react';
import gotLogo from './images/got-logo-png-1.png';
import './App.css';
import axios from 'axios';
import Character from './Character';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      characters: []
    };
  }

  componentDidMount() {
    this._getCharactersForPage();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={gotLogo} alt="logo" />
          <button onClick={this._decrementPageNumber}>Previous</button>
          <button onClick={this._incrementPageNumber}>Next</button>
          {this.state.characters.map(c => <Character data={c}/>)}
        </header>
      </div>
    )
  }
  _getCharactersForPage = async () => {
    const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=10`);
      this.setState({
      characters: response.data
    })
  }
  _incrementPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    }, () => {
      this._getCharactersForPage();
    });
  }
  _decrementPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1
    }, this._getCharactersForPage);
  }
  
}


export default App;

