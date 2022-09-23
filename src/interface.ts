export interface useStateDarkMode {
  isDarkMode: boolean;
  setDarkMode: (params: boolean) => void;
}

export interface useStateHamburger {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: (params: boolean) => void;
}

export interface Project {
  name: string;
  description: string;
  listTech: string[];
  src: string;
  liens: string;
}

export interface Succes {
  name: string;
  liens: string;
  src: string;
  liensGitHub: string;
}

export interface urlType {
  type: string;
  url: string;
}
