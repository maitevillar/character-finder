import React from 'react';
import PropTypes from 'prop-types';

const Character = (props) => {

    const { id, name, specie, avatar } = props;

    return (
        <div className="__character">
            <h1 className="__character--title"> {name} </h1>
            <h4 className="__character--subtitle"> {specie} </h4>
            <img className="__character--picture" src={avatar} alt={id} />
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