export interface ProfileType {
  name: null | string;
  login: string;
  followers: number;
  following: number;
  avatar_url: string;
  bio: null | string;
  email: null | string;
}

export interface RepoType {
  name: string;
  description: string;
  language: string;
}
