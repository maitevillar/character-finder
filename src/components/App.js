import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/FetchData'
import CharacterList from './CharacterList'
import NameFilter from './NameFilter'
import CharacterCard from './CharacterCard'
import NotFound from './Notfound'
import Header from './Header'
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterCard = this.renderCharacterCard.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      data: [],
      value: '',
      name: '',
      isLocal: false,
      search: false,
    }
  }

  componentDidMount() {
    const localValue = JSON.parse(localStorage.getItem('localValue'));
    if (localValue !== null) {
      this.setState({
        name: localValue
      })
    }

    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  componentDidUpdate() {
    localStorage.setItem('localValue', JSON.stringify(this.state.name));
  }

  handleInputValue(event) {
    event.preventDefault();
    this.setState({ value: event.target.value })
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({
      name: this.state.value,
      search: true,
    })
  }

  renderCharacterCard(props) {
    const { data } = this.state;
    const urlId = props.match.params.id;
    for (let character of data) {
      if (character.id === Number.parseInt(urlId)) {
        return <CharacterCard character={character} />
      }
    }
  }

  handleCheckbox() {
    this.setState(prevState => {
      return {
        isLocal: !prevState.isLocal
      }
    })
  }

  reset() {
    this.setState(prevState => {
      return {
        value: '',
        name: '',
        isLocal: false,
        search: false,
      }
    })
  }

  render() {
    const { data, name, isLocal, search } = this.state;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <NameFilter handleInputValue={this.handleInputValue}
              handleSearch={this.handleSearch}
              name={name}
              handleCheckbox={this.handleCheckbox}
              isLocal={isLocal}
              reset={this.reset}
              isSearched={this.isSearched}
              search={search}
            />
            <CharacterList data={data}
              name={name}
              isLocal={isLocal}
            />
          </Route>
          <Route path="/character/:id"
            render={this.renderCharacterCard}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}


export default App;
