import React from "react";
import NavbarDOM from "./../components/NavbarDOM";
import "../styles/Members.css";
import { Octokit } from "octokit";

function Members() {
  const [memberData, setMemberData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_API_TOKEN,
      });

      await octokit
        .request("GET /orgs/heroprogrammers/members")
        .then((response) => {
          setMemberData(response.data);
        });
    })();
  }, []);

  return (
    <div className="members">
      <NavbarDOM activeTab="members" />

      <article className="members-viewer">
        {memberData.map((member) => (
          <a
            href={member.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="member-card" key={member.id}>
              <img
                src={member.avatar_url}
                alt={member.login}
                className="member-avatar"
              />
              <div className="member-info">
                <p className="member-login">
                  <span className="member-name">{member.login}</span>
                  <span className="member-type">{member.type}</span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </article>
    </div>
  );
}

export default Members;
