import SectionTitle from "./SectionTitle";
import ProjectTile from "./ProjectTile";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="w-[90%] mt-8 mb-12">
      <SectionTitle title="PROJECTS" subtitle="TAKE A LOOK AT MY" />
      <div className="w-full grid grid-cols-1">
        {projectsData.map((project) => (
          <ProjectTile
            key={project.name}
            imgName={project.imgName}
            name={project.name}
            description={project.description}
            date={project.date}
            features={project.features}
            technologies={project.technologies}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
