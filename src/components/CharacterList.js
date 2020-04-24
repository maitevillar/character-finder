import React from 'react';
// import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {

    const { dataList, name } = props;

    return (
        <ul className="character-list-container" >
            {dataList
                .filter(character => character.name.toLowerCase().includes(name.toLowerCase()) )
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

// CharacterList.propTypes = {
//     dataList: PropTypes.array,
//     value: PropTypes.string,
// }

export default CharacterList;