import { useLoaderData, Link, Outlet, useLocation } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { API, Types } from "~/features/github";
import { HomeIcon } from "@heroicons/react/24/solid";
import ReposContainer from "~/features/github/Components/ReposContainer";
import Repository from "~/features/github/Components/Repository";

export const loader: LoaderFunction = async () => {
  const username = "elielmayrink";
  const user = await API.getGithubUser(username);
  const limitedrepos = "?per_page=9";
  const repos = await API.getUserGithubRepos(username, limitedrepos);
  return { user, repos };
};

export default function Dashboard() {
  let location = useLocation();
  const personalData = [
    {
      id: 0,
      data: "Brasil",
      url: "#",
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      data: "Organizze",
      url: "https://www.organizze.com.br/",
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      data: "elielmayrink",
      url: "https://github.com/elielmayrink",
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_102_22)">
            <path
              d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
              stroke="#837E9F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
    },
    {
      id: 4,
      data: "Eliel Mayrink",
      url: "https://www.linkedin.com/in/eliel-mayrink-71a042211/",
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9H2V21H6V9Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      data: "no-twitter",
      url: "#",
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 6,
      data: "https://github.com/elielmayrink",
      url: "https://github.com/elielmayrink",
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H22"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 7,
      data: "elielmayrink2@gmail.com",
      url: "#",
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6L12 13L2 6"
            stroke="#837E9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  const techs = [
    "HTML",
    "CSS",
    "JAVSCRIPT",
    "REACTJS",
    "NEXTJS",
    "REMIX",
    "GIT",
    "TAILWINDCSS",
  ];
  const { user, repos } = useLoaderData<Types.Repositories.LoaderData>();
  return (
    <>
      <div className="w-full flex flex-col items-center md:flex-row md:items-start  h-screen bg-[#22212C] px-10 py-10 rounded-md gap-16 mb-10">
        <div className="flex flex-wrap justify-center gap-6 md:block">
          <div className="w-[348px] bg-[#302F3D] py-8 flex flex-col items-center rounded-[20px] mb-7">
            <img
              width={128}
              className="rounded-full mb-[30px]"
              src={user.avatar_url}
              alt="Minha foto do perfil gitHub"
            />
            <h4 className="text-[#837E9F] mb-3 text-2xl leading-7 font-bold">
              Eliel Mayrink
            </h4>
            <span className="text-[#837E9F] leading-4 font-light block mb-5">
              {user.bio}
            </span>
          </div>
          <div className="w-[348px] bg-[#302F3D] rounded-[20px] mb-7 py-[30px] px-10">
            <ul>
              {personalData.map((data) => {
                return (
                  <li
                    className="mb-7 last:mb-0 hover:opacity-50 transition ease-in delay-150"
                    key={data.id}
                  >
                    <a
                      className="flex gap-5 items-center"
                      href={data.url}
                      target="_blanck"
                    >
                      <data.icon />
                      <span className="block text-sm text-[#837E9F]  font-normal leading-4">
                        {data.data}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[348px] bg-[#302F3D] rounded-[20px] mb-7 py-[30px] px-5">
            <h4 className="text-xl text-[#837E9F] font-bold leading-6">
              Tecnologias
            </h4>
            <div className="px-[10px] grid grid-cols-3 gap-y-4 mt-5">
              {techs.map((tech, index) => (
                <div
                  className="bg-[#CB92B1] p-2 mr-[15px] w-[86px] rounded-[30px]"
                  key={index}
                >
                  <span className="text-[10px] block font-bold leading-3 text-center">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[348px] bg-[#302F3D] rounded-[20px] mb-7 py-[30px] px-5">
            <h4 className="text-xl text-[#837E9F] font-bold leading-6">
              Outher Projects
            </h4>
            <div className="px-5 mt-5">
              <ul className="list-disc list-outside text-[#837E9F]">
                <li className="flex flex-col mb-4 hover:opacity-50 transition ease-in delay-150 max-w-[120px]">
                  <Link to="/todolist">
                    <span className="text-base text-[#837E9F] leading-5 font-bold">
                      Todo List
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[348px] bg-[#302F3D] rounded-[20px] mb-7 py-[30px] px-5">
            <h4 className="text-xl text-[#837E9F] font-bold leading-6">
              Experiência
            </h4>
            <div className="px-5 mt-5">
              <ul className="list-disc list-outside text-[#837E9F]">
                <li className="flex flex-col mb-4">
                  <span className="text-base text-[#837E9F] leading-5 font-bold">
                    Organizze
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    2020 - Atualmente
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    Dev FrontEnd junior
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[348px] bg-[#302F3D] rounded-[20px] mb-7 py-[30px] px-5">
            <h4 className="text-xl text-[#837E9F] font-bold leading-6">
              Educação
            </h4>
            <div className="px-5 mt-5">
              <ul className="list-disc list-outside text-[#837E9F]">
                <li className="flex flex-col mb-4">
                  <span className="text-base text-[#837E9F] leading-5 font-bold">
                    Udemy
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    2019 - 2019
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    Curso web: HTML CSS JS
                  </span>
                </li>
                <li className="flex flex-col mb-4">
                  <span className="text-base text-[#837E9F] leading-5 font-bold">
                    Cod3r
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    2021 - 2021
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    Fundamento do javaScript funcional
                  </span>
                </li>
                <li className="flex flex-col mb-4">
                  <span className="text-base text-[#837E9F] leading-5 font-bold">
                    Cod3r
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    2021 - 2021
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    NextJs
                  </span>
                </li>
                <li className="flex flex-col mb-4">
                  <span className="text-base text-[#837E9F] leading-5 font-bold">
                    Cod3r
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    2021 - 2022
                  </span>
                  <span className="text-sm text-[#837E9F] leading-5 ">
                    javaScript funcional e reativo
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-between px-[30px] py-[30px] bg-[#302F3D] rounded-[20px] mb-8">
            <h1 className="text-xl font-bold text-[#837E9F] leading-6">
              My Projects
            </h1>
            <div>
              {location.pathname === "/home" ? (
                <Link
                  to={"repos"}
                  className="text-sm text-[#837E9F] font-normal hover:opacity-50 transition ease-in delay-150"
                >
                  See all projects
                </Link>
              ) : (
                <Link className="text-[#837E9F]" to={"/home"}>
                  <HomeIcon width={30} />
                </Link>
              )}
            </div>
          </div>
          <div>
            {location.pathname === "/home" ? (
              <ReposContainer>
                {repos.map((repo) => {
                  return <Repository key={repo.id} repo={repo} />;
                })}
              </ReposContainer>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
