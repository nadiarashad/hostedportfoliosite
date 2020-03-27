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
          <Card.Img variant="top" src={require("./naughts.png")} />
          <Card.Body>
            <Card.Title>Naughts {"&"} crosses mini app</Card.Title>
            <Card.Text>
              This sprint was another pair programming task, we created a
              Naughts {"&"} Crosses mini game using a css grid. We used React
              Class Components to reset state after each player turn and also
              callback functions running in the background which checked whether
              the current combinations matched any of the winning combinations
              we had set.
              <br></br>
              We allowed users to be able to input their name and used an
              onSubmit on the form to handle the text input. We also imported
              fonts from Google Fonts and styles the components in a classic
              board game design
              <br></br> <br></br> Why not have a turn on the game yourself?
              <a
                href="https://nadiaandjamesnaughtsandcrosses.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nadiaandjamesnaughtsandcrosses.netlify.com/
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./mitch2.png")} />
          <Card.Body>
            <Card.Title>
              Mitch's rare treasures seeding and MVC model sprint
            </Card.Title>
            <Card.Text>
              This sprint required me to create a seed function for the
              insertion of data using knex. This was also a paired programming
              task, where we created util functions to initially seed data using
              reference objects and accessing endpoints to POST, PATCH, DELETE,
              GET requests to the API. We used the Model View Controller (MVC)
              method to display routing and seperate functionality.<br></br>{" "}
              Data was tested by the creation of a spec file using Mocha,
              supertest, Chai and sams-chai-sorted.
              <br></br> <br></br>A link to my GitHub repository can be found
              here{" "}
              <a
                href="https://github.com/nadiarashad/Mitchs_treasures"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/nadiarashad/Mitchs_treasures
              </a>{" "}
              <br></br> The
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={require("./haunted.png")} />
          <Card.Body>
            <Card.Title>Haunted House Adventure Game</Card.Title>
            <Card.Text>
              Object Oriented Programming was used for the structure of this
              sprint. The state of the game was represented by the data or
              properties of the 'Game' object; the actions are methods on the
              object that affect the state. The Game holds many other contents -
              such as a player, which has an inventory, which holds an array of
              Items... and so on. <br></br>
              <br></br>
              <br></br> A link to my GitHub repository for this sprint can be
              found here <br></br> <br></br> This project was created using
              Node, mocha and chai.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./placeholder.png")} />
          <Card.Body>
            <Card.Title>Placeholder title</Card.Title>
            <Card.Text>Coming soon...</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./placeholder.png")} />
          <Card.Body>
            <Card.Title>Placeholder title</Card.Title>
            <Card.Text>Coming soon...</Card.Text>
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
