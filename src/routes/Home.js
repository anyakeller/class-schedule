import React from "react";
import fiorDiLatte from "../fiorDiLatte.png";

function Home(props) {
  return (
    <div>
      <div
        className="border border-info rounded-3 mx-auto px-4 py-4"
        style={{
          maxWidth: "690px"
        }}>
        <img src={fiorDiLatte} className="img-fluid" alt="fiorDiLatte" />
      </div>
    </div>
  );
}

export default Home;
