import React from "react";
import "./SearchFilterSideBar.css";

function SearchFilterSideBar() {
  return (
    <div className="searchfilt-container">
      <div className="searchfilt-container-div1">
        <p className="searchfilt-container-div1-p">Industries</p>
        <input
          type="text"
          placeholder="Filter Industries"
          className="searchfilt-container-div1-ip"
        />
      </div>
      <div className="searchfilt-container-div2">
        <div className="searchfilt-container-div2-scroll">
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">
              {" "}
              Technology
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> Web</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">
              Software Service
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> Content</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> Data</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> HTML</label>
          </div>
        </div>
      </div>

      <div className="searchfilt-container-div3">
        <p className="searchfilt-container-div3-p">Programming Language</p>
        <input
          type="text"
          placeholder="Filter PL"
          className="searchfilt-container-div3-ip"
        />
      </div>

      <div className="searchfilt-container-div4">
        <div className="searchfilt-container-div4-scroll">
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">CSS</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> C#</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">
              App Inventor for Android
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">Dart</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> Firebase</label>
          </div>
        </div>
      </div>
      <div className="searchfilt-container-div5">
      <p className="searchfilt-container-div5-p">Tags</p>
        <input
          type="text"
          placeholder="Filter Tags"
          className="searchfilt-container-div5-ip"
        />

        
      </div>
      <div className="searchfilt-container-div6">

      <div className="searchfilt-container-div6-scroll">
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">Admob</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> C#</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">
              Admin
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label">Dart</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="searchfilt-container-div-label"> Application Code</label>
          </div>
        </div>
      </div>
      <div className="searchfilt-container-div7">
    Reset
</div>

    </div>
  );
}

export default SearchFilterSideBar;
