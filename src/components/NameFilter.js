import React from 'react';

const NameFilter = (props) => {

  const { name, handleInputValue, isLocal, handleSearch, reset, search } = props;
  
  const updateCheckbox = () => {
    props.handleCheckbox()
  }

  return (
    <form className="filter-container">

      <div className="filter-container__item">

        <button className="filterbutton"
          onClick={reset}>See all characters </button>

        <div className="filter-container__item--searcher">
          <input className="nameinput"
            type="text"
            placeholder=' Introduce the title'
            name="searcher"
            id="input-form"
            onChange={handleInputValue}
          />
          <button className="inputbutton"
            onClick={handleSearch}> search</button>
        </div>

        <div className={`filter-container__item ${search !== true ? 'hidden' : 'preview'}`} > The name you are looking for includes: <span className="highlight"> {name} </span> </div>

        <div className="filter-container__item--filters">
          <label className="label-2" htmlFor="status">  Locals</label>
          <input className="checkinput"
            type="checkbox"
            id="status"
            name="status"
            value="Status"
            onChange={updateCheckbox}
            checked={isLocal}
          />
        </div>
      </div>
    </form>
  )
}

export default NameFilter;
