import React from 'react';
import { Link } from 'react-router-dom';
import dead from '../images/dead.png';
import alive from '../images/alive.png';


const CharacterCard = (props) => {

    const { character } = props;

    return (
        <div className="character-card-wrapper">

            <Link to={`/#`}> <i className="return">return</i> </Link>

            <div className="character-card-container">
                <img className="character-card-container__picture"
                    src={character.image} alt={character.id} />

                <div className="character-card-container__text">
                    <h1 className="character-card-container__text--title"> {character.name} </h1>
                    <ul className="character-card-container__text--list">
                        <li className="character-card-container__text--list item1"> <span className="highlight-card">specie:</span> {character.species} </li>
                        <li className="character-card-container__text--list item2"> <span className="highlight-card">origin:</span> {character.origin.name} </li>
                        <li className="character-card-container__text--list item3"> <span className="highlight-card">numbre of episodes:</span>   {character.episode.length} </li>
                        <li className="character-card-container__text--list item4 "> <span className="highlight-card">character status:</span>
                            <img className="status-icon"
                                alt={character.status}
                                src={character.status !== 'Dead' ? alive : dead}
                            /> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
