import React from "react";
import { Image } from "react-bootstrap";

const Charity = () => {
  return (
    <div className="Contact">
      <br></br>
      <p className="h2">My passion</p>
      <p>
        Giving back to the community has always been very important to me,
        helping others in any way I can brings me great joy. <br></br> I have
        been fortunate in being able to travel to Rwanda and give aid to
        communities living with family with disabilities and also help teach
        classes at local Deaf schools in Muzanze. <br></br>I was also part of
        the Group charity team and helped organise activities to raise money and
        also bring the different departments together. <br></br>
        <br></br>In my own time I am part of Amnesty International and help out
        at the local community centre.
      </p>
      <br></br>
      <Image
        src={require("./IMG_3306.JPG")}
        roundedCircle
        className="Charity"
      />
      <br></br>

      <br></br>
      <br></br>
    </div>
  );
};

export default Charity;
