import React from 'react';
import { Link } from 'react-router-dom';
import dead from '../images/dead.png';
import alive from '../images/alive.png';


const CharacterCard = (props) => {
    
    const { character } = props;


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
                    <li className="character-card-container__list--item4 "> Character status: 
                    <img className="status-icon"
                         alt={character.status} 
                         src={character.status !== 'Dead' ? alive : dead }
                    /> </li>
                </ul>
            </div>
        </div>
    );
}

export default CharacterCard;
