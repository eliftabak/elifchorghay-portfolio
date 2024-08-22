interface ProjectLinks {
    video?: string;
    figma?: string;
    live?: string;
    github?: string;
  }
  
  interface IProject {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    links: ProjectLinks;
    bgColor: string;
  }
  
  interface IProjectsData extends Array<IProject> {}
  
  export default IProjectsData;