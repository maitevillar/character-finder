import React from 'react';
import PropTypes from 'prop-types';

const Character = (props) => {

    const { id, name, specie, avatar } = props;

    return (
        <div className="character" >
            <h4 className="character__subtitle"> {specie} </h4>
            <h1 className="character__title"> {name} </h1>
            <img className="character__picture" src={avatar} alt={id} />
        </div>
    )
}

Character.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    specie: PropTypes.string,
    avatar: PropTypes.string,
}

export default Character