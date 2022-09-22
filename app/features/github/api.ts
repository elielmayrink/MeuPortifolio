import invariant from "tiny-invariant";
import pick from "lodash/pick";
import { Types } from "./";
import { auth } from "~/auth";

export async function getGithubUser(username?: string) {
  invariant(username, "Please provide a username as a string");
  const res = await fetch(`http://api.github.com/users/${username}`, auth);

  return pick(await res.json(), ["login", "avatar_url", "html_url", "bio"]);
}

export async function getUserGithubRepos(username?: string) {
  invariant(username, "Please provide a username as a string");
  const res = await fetch(
    `http://api.github.com/users/${username}/repos`,
    auth
  );

  return (await res.json()).map((repo: Types.Repositories.Repo) =>
    pick(repo, [
      "id",
      "full_name",
      "stargazers_count",
      "forks",
      "description",
      "html_url",
      "language",
      "name",
    ])
  );
}

export async function getCommits(
  username?: string,
  reponame?: string
): Promise<Types.Commits.Commit[]> {
  invariant(reponame, "Please provide a reponame as a string");
  const res = await fetch(
    `http://api.github.com/repos/${username}/${reponame}/commits`,
    auth
  );

  return (await res.json()).map((commit: Types.Commits.ApiResponse) => ({
    sha: commit.sha,
    message: commit.commit.message,
    html_url: commit.html_url,
  }));
}
