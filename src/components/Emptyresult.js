import React from 'react';


const Emptyresult = (props) => {

    const { name } = props;

    return (
        <div className="empty-result-container">
            <p className="empty-result-container__text"> there is no character with these letters: <br /> <span className="error-text highlight">{name}</span></p>
            <img className="empty-result-container__picture" src="https://media.giphy.com/media/3o7aDbeo34WHHejJ2E/giphy.gif" alt="head-morty-gif" />
        </div>
    )
}

export default Emptyresult