import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { API, Types } from "~/features/github";
import folderIcon from "../../assets/images/folder.png";
import gitBranch from "../../assets/images/git-branch.png";
import { StarIcon } from "@heroicons/react/24/outline";
import ReposContainer from "~/features/github/Components/ReposContainer";
import Repository from "~/features/github/Components/Repository";

export const loader: LoaderFunction = async () => {
  const username = "elielmayrink";
  const repos = await API.getUserGithubRepos(username);
  return { repos };
};

export default function limitedrepos() {
  const { repos } = useLoaderData<Types.Repositories.LoaderData>();
  return (
    <ReposContainer>
      {repos.map((repo) => {
        return <Repository key={repo.id} repo={repo} />;
      })}
    </ReposContainer>
  );
}
