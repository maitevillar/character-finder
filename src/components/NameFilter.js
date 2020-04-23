import React from 'react';

const NameFilter = (props) => {

  const { value } = props;

  return (
    <form className="filter-container">

      <div className="filter-container__item">
        <input className="filter-container__item--nameinput"
          type="text"
          placeholder=' Introduce the title'
          name="searcher"
          id="input-form"
          onChange={props.handleInputValue}
        />

        <span className="filter-container__item--preview"> You are looking for <span className="highlight"> _{value}_ </span> character </span>
      </div>
    </form>
  )
}

export default NameFilter;
