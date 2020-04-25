import React from 'react';
import PropTypes from 'prop-types';

const Character = (props) => {

    const { id, name, specie, avatar } = props;

    return (
        <div className="character">
            <img className="character__picture" src={avatar} alt={id} />
            <section className="character__text"> <h4 className="character__text--subtitle"> {specie} </h4>
            <h1 className="character__text--title"> {name} </h1></section>
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