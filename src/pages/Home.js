import React from "react";
import NavbarDOM from "./../components/NavbarDOM";
import FooterDOM from "./../components/FooterDOM";
import "./../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { Octokit } from "octokit";

function Header() {
  return (
    <header>
      <p>Welcome to Hero Programmers Community!</p>
    </header>
  );
}

function Home() {
  const [memberCount, setMemberCount] = React.useState(0);
  const [repoCount, setRepoCount] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_API_TOKEN,
      });

      await octokit
        .request("GET /orgs/heroprogrammers/members")
        .then((response) => {
          setMemberCount(response.data.length);
        });

      await octokit
        .request("GET /orgs/heroprogrammers/repos")
        .then((response) => {
          setRepoCount(response.data.length);
        });
    })();
  }, []);

  return (
    <div className="home">
      <NavbarDOM activeTab="home" />
      <Header />

      <article className="hero-1">
        <div className="cards card-1">
          <p>
            <FontAwesomeIcon icon={faUsers} />
            &nbsp;&nbsp;Members:&nbsp;
            <span id="members_holder">{memberCount}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faGitAlt} />
            &nbsp;&nbsp;Repositories:&nbsp;
            <span id="repositories_holder">{repoCount}</span>
          </p>
        </div>
        <div className="cards card-2">
          <figure>
            <p>Our Motive</p>
            <figcaption>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia.
            </figcaption>
          </figure>
        </div>
        <div className="cards card-3">
          <figure>
            <p>Our Future Resolutions</p>
            <figcaption>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia.
            </figcaption>
          </figure>
        </div>
      </article>

      <FooterDOM />
    </div>
  );
}

export default Home;
