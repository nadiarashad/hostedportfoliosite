import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div className="Home">
      <br></br>
      <br></br>
      <p className="h2">Welcome to my portfolio website</p>
      <br></br>
      <Image
        src={require("./20190607_190334.jpg")}
        roundedCircle
        className="Me"
      />
      <br></br>
      <br></br>
      <h3>Past experience...</h3>

      <Link to={"/projects"}>
        <li>Northcoders </li>
      </Link>
      <p>
        Completed bootcamp style training to become a full stack software
        developer, Dec 2019 - Apr 2020
      </p>
      <br></br>
      <Link to={"/other"}>
        <li>Gregory Pennington Ltd</li>
      </Link>
      <p>Marketing Compliance Manager, Jul 2018 – Dec 2019</p>
      <br></br>
      <Link to={"/other"}>
        <li>Think Money Group Limited</li>
      </Link>
      <p>Financial Promotions Analyst, Dec 2014 – Dec 2019</p>
      <br></br>
      <Link to={"/other"}>
        <li>Freeman Jones Ltd</li>
      </Link>
      <p>Risk and Process Analyst, Nov 2013 – Nov 2014</p>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
