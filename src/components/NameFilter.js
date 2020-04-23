import React from 'react';

const NameFilter = (props) => {

  const { name, handleInputValue, handleSearch } = props;

  return (
    <form className="filter-container">

      <div className="filter-container__item">
        <div className="filter-container__item--searcher"> 
        <input className="nameinput"
          type="text"
          placeholder=' Introduce the title'
          name="searcher"
          id="input-form"
          onChange={handleInputValue}
        />
        <button className="button" onClick={handleSearch}>search</button>
        </div>
        <span className="filter-container__item--preview"> You have searched: <span className="highlight"> {name} </span> </span>
      </div>
    </form>
  )
}

export default NameFilter;
