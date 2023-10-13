import React, { useState } from "react";
import "./FilterDropeBox.css";

function FilterDropeBox() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="filterdrope-container">
      <div className="filterdrope-container-main">
        <p className="filterdrope-container-main-p" style={{marginTop:"5px"}}>New arrivals</p>
        <p className="filterdrope-container-main-p">Relevance</p>
        <p className="filterdrope-container-main-p">Popularity</p>
        <p className="filterdrope-container-main-p">Price</p>
        <p className="filterdrope-container-main-p">Evaluation</p>

      </div>
    </div>
  );
}

export default FilterDropeBox;
