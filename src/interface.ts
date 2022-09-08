export interface useStateDarkMode {
  isDarkMode: boolean;
  setDarkMode: (params: boolean) => void;
}

export interface Project {
  name: string;
  description: string;
  listTech: string[];
  src: string;
  liens: string;
}
