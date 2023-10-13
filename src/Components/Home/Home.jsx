import React from "react";
import "./Home.css";

let no = +1000;

function Home() {


    const seasons = ["Spring", "Summer", "Autumn", "Winter"];

    let seasonsList = [];
  
    seasons.forEach((season, index) => {
      seasonsList.push(<li style={{color:"red"}} key={index}>{season}</li>);
    });

  return (
    <div className="home-container">
      <div className="home-container-div1">

      {/* <h2>Seasons of the year</h2> */}
      <div>{seasonsList}</div>
      </div>
    </div>
  );
}

export default Home;
