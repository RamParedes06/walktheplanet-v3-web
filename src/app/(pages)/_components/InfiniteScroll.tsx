import React from "react";
import "../../../../styles/infinite-scroll.scss";
const InfiniteScroll = () => {
  return (
    <div className="carousel">
      <div className="group">
        <div className="card">A</div>
        <div className="card">B</div>
        <div className="card">C</div>
      </div>

      <div aria-hidden className="group">
        <div className="card">A</div>
        <div className="card">B</div>
        <div className="card">C</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
