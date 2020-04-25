import React from 'react';
// import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
import Emptyresult from './Emptyresult';

const CharacterList = (props) => {

    const { name, isLocal } = props
    const datacontent = [...props.data]

        .filter(character => character.name === '' | character.name.toLowerCase().includes(name.toLowerCase()))

    if (datacontent.length === 0) {
        return <Emptyresult name={name} />
    } else {
        return (
            <ul className="character-list-container" >
                {datacontent
                    .sort((character, character2) => character.name.localeCompare(character2.name))
                    .filter(character => !isLocal || (isLocal && character.origin.name.includes('Earth')))
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