import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    const { character } = props;
    console.log(character)
    return (
        <div className="character-card-wrapper">
            <Link to={`/#`}> <i className="return">home</i> </Link>
            <div className="character-card-container">
                <img className="character-card-container__picture"
                    src={character.image} alt={character.id} />
                <h1 className="character-card-container__title"> {character.name} </h1>
                <ul className="character-card-container__list">
                    <li className="character-card-container__list--item1"> specie: {character.species} </li>
                    <li className="character-card-container__list--item2"> origin: {character.origin.name} </li>
                    <li className="character-card-container__list--item3"> number of episodes: {character.episode.length} </li>
                    <li className="character-card-container__list--item4"> status: {character.status} </li>
                </ul>
            </div>
        </div>
    );
}

export default CharacterCard;
