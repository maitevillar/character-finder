import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div className="not-found">
        <div className="not-found__text"> 
            <h1 className="nf-title"> 404 </h1>
            <p className="nf-text">  Are you lost?</p>
        
            <Link to={`/#`}> <button className="nf-button"> Back to home </button> </Link>
        </div>
        <div className="not-found__image"> 
        <img src="https://media.giphy.com/media/dz6NpfESnqqcnJH1MY/giphy.gif" alt="notfound"/>
        </div>
	</div>
);

export default NotFound;