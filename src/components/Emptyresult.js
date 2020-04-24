import React from 'react';


const Emptyresult = (props) => {
    
    const { name } = props;

    return (
        <div className="empty-result-container">
            <img className="empty-result-container__picture" src="https://media.giphy.com/media/3o7aDbeo34WHHejJ2E/giphy.gif" alt="head-morty-gif" />
            <p className="empty-result-container__text"> No hay ningun personaje que coincida con <span className="highlight">{name}</span></p>
        </div>
    )
}

export default Emptyresult