interface ProjectDetails {
  title: string;
  overview: string;
  technologies: Array<string>;
  features: Array<string>;
  links: {
    code: string;
    demo: string;
  };
}
const projectData: Record<string, ProjectDetails> = {
  trabahuso: {
    title: "Trabahuso",
    overview:
      "Data visualizations of scraped software developer jobs providing insights to the software developer job market in the Philippines.",
    technologies: [
      "typescript",
      "react",
      "express.js",
      "python",
      "selenium",
      "sqlite",
      "chakra ui",
    ],
    features: ["",],
    links: {
      code: "",
      demo: "",
    },
  },
};

export default projectData;
