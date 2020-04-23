import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/FetchData'
import CharacterList from './CharacterList'
import NameFilter from './NameFilter'
import CharacterCard from './CharacterCard'
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterCard = this.renderCharacterCard.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      data: [],
      value: '',
      name: '',
    }
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  handleInputValue(event) {
    event.preventDefault();
    this.setState({ value: event.target.value })
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ name: this.state.value})
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

  render() {
    const { data, name } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NameFilter handleInputValue={this.handleInputValue}
                        handleSearch={this.handleSearch}
                        name={name}
            />
            <CharacterList dataList={data}
                           name={name}
            />
          </Route>

          <Route path="/character/:id"
                 render={this.renderCharacterCard}
          />

        </Switch>
      </div>
    );
  }
}


export default App;
