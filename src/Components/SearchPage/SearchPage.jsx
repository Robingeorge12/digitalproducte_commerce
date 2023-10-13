import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { useDispatch, useSelector } from "react-redux";
import { filterSearch, getData } from "../../Redux/app/action";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function SearchPage({ search, handleSearch }) {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const { dataNames, data } = useSelector((store) => {
    return {
      dataItems: store.AppReducer,
      data: store.AppReducer,
    };
  });

  // console.log(data.data);
  // console.log(name)

  const searchNames = (search) => {
    const arr = data?.data?.filter((filt) => {
      return filt.category === search;
    });
    setName(arr || []);
  };
  useEffect(() => {
    searchNames(search);
  }, [search]);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleFilterValue = (value) => {
    // we have passed value to seach tag through a function
    console.log(value);
    handleSearch(value);
    navigate("/searchproduct")
  };

  // useEffect(() => {
  //   dispatch(filterSearch(search));
  // }, [search]);

  return (
    <div className="search-container">
      {data?.data
        ?.filter((fil) => {
          const searchVal = search.toLowerCase();
          const dataName = fil.category.toLowerCase();

          return (
            searchVal &&
            dataName.startsWith(searchVal) &&
            dataName !== searchVal
          );
        })
        .map((el, i) => (
          <div
            key={i}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={`search-link ${show ? "active" : ""}`}
            onClick={() => handleFilterValue(el.category)}
          >
            {" "}
            <p style={{}}>{el.category}</p>
            <div className="search-icondiv">
              <BsSearch className="search-icon" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SearchPage;
