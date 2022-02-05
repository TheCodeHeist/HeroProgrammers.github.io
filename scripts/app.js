import { Octokit } from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit();

const members = await octokit.request("GET /orgs/:org/members", {
  org: "heroprogrammers",
  type: "all",
});

const repos = await octokit.request("GET /orgs/:org/repos", {
  org: "heroprogrammers",
  type: "all",
});

document.getElementById("members_holder").innerHTML = members.data.length;
document.getElementById("repositories_holder").innerHTML = repos.data.length;
