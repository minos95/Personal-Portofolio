import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 style={{ color: "#8d9ca6" }}>
        <strong>My Best Work</strong>
      </h1>
      <div className="section">
        <h2>Web Application</h2>
        <div className="sub-section">
          <div class="card bg-dark text-white">
            <img src="..." class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Mobile Application</h2>
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Design</h2>
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Games</h2>
        <div className="sub-section"></div>
      </div>
    </div>
  );
};

export { Portfolio };
