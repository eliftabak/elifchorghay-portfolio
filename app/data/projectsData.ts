import IProjectsData from "./projectsData.d";

const projectsData: IProjectsData = [
    {
      title: "Converse",
      description: "Interactive webpage template that Converse can use to manage and edit content via Akinon's custom CMS.",
      technologies: ["JavaScript", "Jinja", "Bootstrap"],
      image: "/images/converse1.png",
      links: {
        video: "https://youtu.be/0I2QbagL91k",
      },
      bgColor: "bg-pink-200",
    },
    {
      title: "L'Occitane en Provence",
      description: "eCommerce site for a French brand that sells everything related to bath and beauty.",
      technologies: ["JavaScript", "Jinja", "jQuery", "Bootstrap"],
      image: "/images/loccitane.png",
      links: {
        video: "https://youtu.be/KWrVTW3oKbA",
      },
      bgColor: "bg-orange-200",
    },
    {
      title: "Bank Mobile App Design Concept",
      description: "A new modern looking UI concept for Banque Saudi Fransi mobile app.",
      technologies: ["Figma"],
      image: "/images/bankconcept.png",
      links: {
        figma: "https://www.figma.com/file/FFEiZ8VK1IpNvCcTEbHsb7/Workspace?node-id=28:0",
        live: "https://drive.google.com/file/d/1xKQdpLi7bFBGbW0zlyBcu_lBNpEV2WBe/view",
      },
      bgColor: "bg-blue-200",
    },
  ];
  
  export default projectsData;
  