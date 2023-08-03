import Skill from "./Skill";
import { skillsData } from "../data/skillsData";
import SectionTitle from "./SectionTitle";

const TechStack = () => {
  return (
    <div className="w-[90%] mb-20">
      <SectionTitle title="SKILLS" subtitle="CHECK OUT MY" />
      <div className="mt-4 grid-cols-3 grid-rows-3 grid gap-4 items-center justify-items-center">
        {skillsData.map((skill) => (
          <Skill key={skill.name} text={skill.name} colorIcon={skill.colorIcon} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
