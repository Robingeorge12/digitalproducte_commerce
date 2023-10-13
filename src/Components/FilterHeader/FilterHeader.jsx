import React, { useState } from "react";
import "./FilterHeader.css";
import { Link } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import { ImFilter } from "react-icons/im";
import { MdSort } from "react-icons/md";

import SortDropeBox from "../SortDropeBox/SortDropeBox";
import FilterDropeBox from "../FilterDropeBox/FilterDropeBox";

function FilterHeader() {
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterDisplay = () => {
    setShowFilter(!showFilter);
    console.log(showFilter)
  };

  return (
    <div className="filterhead-container">
      <div className="filterhead-container-main">
        <div className="filterhead-container-main-div1">
          <div className="filterhead-container-main-div1-box1">
            <Link to="" className="filterhead-container-main-div1-box1-link">
              <p>Top</p>
              <div className="filterhead-container-main-div1-box1-icondiv1">
                <HiChevronDoubleRight className="filterhead-container-main-div1-box1-icondiv1-icon" />
              </div>
            </Link>
          </div>

          {/* {///////////////} */}

          <div className="filterhead-container-main-div1-box2">
            <Link to="" className="filterhead-container-main-div1-box2-link">
              <p>Source Codes</p>
              <div className="filterhead-container-main-div1-box2-icondiv1">
                <HiChevronDoubleRight className="filterhead-container-main-div1-box2-icondiv1-icon" />
              </div>
            </Link>
          </div>

          {/* {////////////////////} */}

          <div className="filterhead-container-main-div1-box3">
            <Link to="" className="filterhead-container-main-div1-box3-link">
              <p>New Source Codes</p>
            </Link>
          </div>

          <div className="filterhead-container-main-div1-box4">
            <div
              onClick={handleFilterDisplay}
             
              className="filterhead-container-main-div1-box4-filter"
            >
              <p>Filter</p>
              <div className="filterhead-container-imgdiv">
                {" "}
                <ImFilter className="filterhead-container-img-icon" />
              </div>
            </div>
            { showFilter && <div><SortDropeBox /></div>}
          </div>
        </div>

        <div className="filterhead-container-main-div2">
          <div className="filterhead-container-main-div2-select">
            <select
              name=""
              id=""
              className="filterhead-container-main-div2-select-tag"
            >
              <option value="">Sort By</option>
              <option value="">New arrivals</option>
              <option value="">Relevance</option>
              <option value="">Popularity</option>
              <option value="">Price</option>
              <option value="">Evaluation</option>
            </select>
          </div>
          <div
            className="filterhead-container-main-div2-default"
            onClick={() => setShow(!show)}
            onMouseLeave={() => setShow(false)}
          >
            <p>Sort</p>
            <div className="filterhead-container-main-div2-default-icondiv">
              <MdSort className="filterhead-container-main-div2-default-icon" />
            </div>
          </div>

          {show && <FilterDropeBox showVal={setShow} />}
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;
