import React from "react";
import { CardDeck, Card } from "react-bootstrap";
// import { Link } from "@reach/router";

const Projects = () => {
  return (
    <div>
      <br></br>
      <p className="h2">Please see my latest projects below</p>
      <br></br> <br></br>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={require("./NC-NEWS.png")} />
          <Card.Body>
            <Card.Title>Northcoders News Front End</Card.Title>
            <Card.Text>
              This is NC-News Frontend, a React app for a reddit style news site
              and discussion website, which allows logged in users to post
              articles and comments, vote on articles and comments, filter
              articles by topic, sort articles by date, number of comments and
              number of votes, delete their own articles and comments.<br></br>
              <br></br> The hosted application can be found at
              <a
                href="https://nadias-nc-news.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nadias-nc-news.netlify.com/
              </a>
              <br></br> A link to my GitHub repository is{" "}
              <a
                href="https://github.com/nadiarashad/hosted-ncnews"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/nadiarashad/hosted-ncnews
              </a>{" "}
              <br></br> <br></br> This project was created using React, Node,
              React-Bootstrap, Moment, Axios and @reach/router for the internal
              links.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./BE.png")} />
          <Card.Body>
            <Card.Title>Northcoders News Back End</Card.Title>
            <Card.Text>
              NC News API NC News API is a back-end API built to serve the
              front-end for the Northcoders News UI. <br></br>
              Testing has been implemented throughout, with each describe block
              representing an endpoint on the api, and each it block creates a
              new valid or invalid http request to that endpoint. The API
              responds must match the assertions written in expect statements
              for the particular test to pass.<br></br> This API is hosted on
              Heroku. <br></br>
              <br></br> A link to my GitHub repository can be found{" "}
              <a
                href="https://github.com/nadiarashad/nc_news_new"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/nadiarashad/nc_news_new
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./StudentTracker.png")} />
          <Card.Body>
            <Card.Title>Student Tracker</Card.Title>
            <Card.Text>
              Northcoders identified a need to better track students' journeys
              through the course, they provided an API with various endpoints
              and it was my task to create a user friendly interface so that
              coders and non-coders can view and edit students' information.
              <br></br> <br></br>A link to my GitHub repository can be found
              here{" "}
              <a
                href="https://github.com/nadiarashad/student-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/nadiarashad/student-tracker
              </a>{" "}
              <br></br> The UI was created using React and the endpoints/date
              were fetched using Axios.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={require("./Nasa.png")} />
          <Card.Body>
            <Card.Title>
              React-based interface to present Nasa's api data on meteorite
              landings
            </Card.Title>
            <Card.Text>
              {" "}
              I completed this sprint with paired programming, allowing me to
              share code and explain what I am doing with feedback from my
              partner as well as working as a team to create a fun, user
              friendly UI.<br></br> This sprint allowed us both to be creative,
              finding an animated space background from CodePen and assigning
              the class to our header and charts to make a space theme.<br></br>{" "}
              Within this sprint we created 2 charts, a pie chart and a line
              graph, allowing the user to input two years, we the display the
              charts with the respective meteorite landings between these dates.
              <br></br>
              <br></br>
              <br></br> A link to my GitHub repository for this sprint can be
              found here{" "}
              <a
                href="https://github.com/nadiarashad/fe-react-data-visualisation"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/nadiarashad/fe-react-data-visualisation
              </a>{" "}
              <br></br> <br></br> This project was created using React, Node,
              React-Bootstrap, Axios and react-chartjs-2
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./BE.png")} />
          <Card.Body>
            <Card.Title>Northcoders News Back End</Card.Title>
            <Card.Text>
              NC News API NC News API is a back-end API built to serve the
              front-end for the Northcoders News UI. <br></br>
              Testing has been implemented throughout, with each describe block
              representing an endpoint on the api, and each it block creates a
              new valid or invalid http request to that endpoint. The API
              responds must match the assertions written in expect statements
              for the particular test to pass.<br></br> This API is hosted on
              Heroku. <br></br>
              <br></br> A link to my GitHub repository can be found{" "}
              <a
                href="https://github.com/nadiarashad/nc_news_new"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/nadiarashad/nc_news_new
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./StudentTracker.png")} />
          <Card.Body>
            <Card.Title>Student Tracker</Card.Title>
            <Card.Text>
              Northcoders identified a need to better track students' journeys
              through the course, they provided an API with various endpoints
              and it was my task to create a user friendly interface so that
              coders and non-coders can view and edit students' information.
              <br></br> <br></br>A link to my GitHub repository can be found
              here{" "}
              <a
                href="https://github.com/nadiarashad/student-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/nadiarashad/student-tracker
              </a>{" "}
              <br></br> The UI was created using React and the endpoints/date
              were fetched using Axios.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Projects;
