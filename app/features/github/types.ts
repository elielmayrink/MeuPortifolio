export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export namespace Repositories {
  export interface Repo {
    id: number;
    full_name: string;
    description: string;
    forks: number;
    stargazers_count: number;
    html_url: string;
    language: string;
    name: string;
  }

  export interface LoaderData {
    user: User;
    repos: Repo[];
  }
}

export namespace Commits {
  export interface ApiResponse {
    sha: string;
    commit: {
      message: string;
    };
    html_url: string;
  }

  export interface Commit {
    sha: string;
    message: string;
    html_url: string;
  }
  export interface LoaderData {
    user: User;
    commits: Commit[];
  }
}
