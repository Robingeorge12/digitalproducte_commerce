import React from "react";
import "./SortDropeBox.css";

import { ImFilter } from "react-icons/im";
import { Link } from "react-router-dom";

function SortDropeBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sortdrope-container">
          <div className="sortdrope-container-main">
      <div className="sortdrope-container-div1">
        <p className="sortdrope-container-div1-p">Industries</p>
        <input
          type="text"
          placeholder="Filter Industries"
          className="sortdrope-container-div1-ip"
        />
      </div>
      <div className="sortdrope-container-div2">
        <div className="sortdrope-container-div2-scroll">
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> Technology</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> Web</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">
              Software Service
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> Content</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> Data</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> HTML</label>
          </div>
        </div>
      </div>

      <div className="sortdrope-container-div3">
        <p className="sortdrope-container-div3-p">Programming Language</p>
        <input
          type="text"
          placeholder="Filter PL"
          className="sortdrope-container-div3-ip"
        />
      </div>

      <div className="sortdrope-container-div4">
        <div className="sortdrope-container-div4-scroll">
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">CSS</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> C#</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">
              App Inventor for Android
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">Dart</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> Firebase</label>
          </div>
        </div>
      </div>
      <div className="sortdrope-container-div5">
        <p className="sortdrope-container-div5-p">Tags</p>
        <input
          type="text"
          placeholder="Filter Tags"
          className="sortdrope-container-div5-ip"
        />
      </div>
      <div className="sortdrope-container-div6">
        <div className="sortdrope-container-div6-scroll">
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">Admob</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label"> C#</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">Admin</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">Dart</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="sortdrope-container-div-label">
              {" "}
              Application Code
            </label>
          </div>
        </div>
      </div>
      <div className="sortdrope-container-div7">Reset</div>
    </div>
    </div>
  );
}

export default SortDropeBox;
