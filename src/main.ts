import projectData from "./projectData";

const detailButton: Array<HTMLButtonElement> = Array.from(
  document.querySelectorAll(".detail-button")
);
const closeDrawerBtn = document.querySelector(
  "#close-drawer"
) as HTMLDivElement;
const body = document.querySelector("body") as HTMLBodyElement;
const projectDrawer = document.querySelector("#drawer") as HTMLDivElement;
const projectDrawerDetails = document.querySelector(
  "#drawer-project-details"
) as HTMLDivElement;
const dProjectTitle = document.querySelector(
  "#drawer-project-title"
) as HTMLDivElement;
const dProjectOverview = document.querySelector(
  "#drawer-overview-desc"
) as HTMLDivElement;
const dProjectTechnologies = document.querySelector(
  "#drawer-project-technologies"
) as HTMLUListElement;
const dProjectFeatures = document.querySelector(
  "#drawer-project-features"
) as HTMLUListElement;
const dProjectCodeLink = document.querySelector(
  "#drawer-project-code-link"
) as HTMLAnchorElement;
const dProjectDemoLink = document.querySelector(
  "#drawer-project-demo-link"
) as HTMLAnchorElement;

projectDrawerDetails.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

projectDrawer.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  projectDrawer.classList.toggle("hide-drawer");
  body.classList.toggle("disable-scroll");
});

closeDrawerBtn.addEventListener("click", () => {
  projectDrawer.classList.toggle("hide-drawer");
  body.classList.toggle("disable-scroll");
});

detailButton.forEach((button) => {
  button.addEventListener("click", () => {
    projectDrawer.classList.toggle("hide-drawer");
    body.classList.toggle("disable-scroll");
  });
});
