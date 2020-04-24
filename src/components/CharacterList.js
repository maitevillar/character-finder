import React from 'react';
// import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {

    const { name } = props;
    const datacontent = [ ...props.data]

    .filter(character => character.name === '' | character.name.toLowerCase().includes(name.toLowerCase()));

    if(datacontent.length === 0) {
        return <p> Error </p>
    } else {
        console.log('results'+ datacontent)
        return (
        <ul className="character-list-container" >
            {datacontent
                .sort((character, character2) => character.name.localeCompare (character2.name))
                .map(character =>

                    <li className="character-list-container__item"
                        key={character.id}>
                        <Link to={`/character/${character.id}`}>
                            <Character id={character.id}
                                name={character.name}
                                specie={character.species}
                                avatar={character.image}
                            />
                        </Link>
                    </li>
                )}
        </ul>
    )
    }
}

// CharacterList.propTypes = {
//     dataList: PropTypes.array,
//     value: PropTypes.string,
// }

export default CharacterList;