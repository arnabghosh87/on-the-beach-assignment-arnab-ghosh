import React from 'react';
import './filterList.css';
import { FaPoundSign, FaSortAlphaDown, FaStar } from "react-icons/fa";

function FilterList({onChangeSorting}) {
  return (
    <div className="card">
      <div className="list-group list-group-flush">
        <div onClick={onChangeSorting("Price")} className='list-group-item d-flex justify-content-between active'>Sort By Price <FaPoundSign/></div>
        <div onClick={onChangeSorting("Alphabet")} className='list-group-item d-flex justify-content-between'>Sort By Alphabet <FaSortAlphaDown /></div>
        <div onClick={onChangeSorting("Rating")} className='list-group-item d-flex justify-content-between'>Sort By Rating <FaStar /></div>
      </div>
    </div>
  );
}

export default FilterList;