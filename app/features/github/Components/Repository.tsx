import { StarIcon } from "@heroicons/react/24/solid";
import { Types } from "~/features/github";
import folderIcon from "~/assets/images/folder.png";
import gitBranch from "~/assets/images/git-branch.png";

export interface RepositoryProps {
  repo: Types.Repositories.Repo;
}

export default function Repository({ repo }: RepositoryProps) {
  return (
    <div className="px-[30px] py-[30px] bg-[#302F3D] rounded-[20px] w-[430px] h-[186px] flex flex-col justify-between">
      <div>
        <div className="flex gap-x-4 mb-5">
          <img width={20} src={folderIcon} className="object-fill" alt="" />
          <h6 className="font-bold text-base text-[#837E9F]">{repo.name}</h6>
        </div>
        <div>
          <p className="text-sm text-[#837E9F] line-clamp-2">
            {repo.description
              ? repo.description
              : "Repositótio sem descrição por isso o texto default"}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-5 items-center">
          <div className="flex gap-2 items-center">
            <StarIcon color="#837E9F" width={20} />
            <span className="text-[#837E9F]">{repo.stargazers_count}</span>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-5 h-5" src={gitBranch} alt="" />
            <span className="text-[#837E9F]">{repo.forks}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#E7DE79] mr-1"></div>
          <span className="text-[#837E9F]">
            {repo.language ? repo.language : "Undefined language"}
          </span>
        </div>
      </div>
    </div>
  );
}
