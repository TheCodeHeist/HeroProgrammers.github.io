import React from "react";
import NavbarDOM from "./../components/NavbarDOM";
import "../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Octokit } from "octokit";

function Projects() {
  const [repoData, setRepoData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_API_TOKEN,
      });

      await octokit
        .request("GET /orgs/heroprogrammers/repos")
        .then((response) => {
          setRepoData(response.data);
        });
    })();
  }, []);

  return (
    <div className="projects">
      <NavbarDOM activeTab="projects" />

      <article className="projects-viewer">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {repoData.map((repo) => (
              <tr key={repo.id}>
                <td className="project-name">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </td>
                <td>{repo.description || "N/A"}</td>
                <td>{repo.language || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
}

export default Projects;
