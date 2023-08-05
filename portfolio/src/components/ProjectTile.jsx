import PropTypes from "prop-types";

const ProjectTile = ({
  imgName,
  name,
  madeAt,
  description,
  date,
  features,
  technologies,
  link,
  github,
}) => {
  return (
    <div className="w-full border-[1px] border-gray-300 rounded-2xl mb-8">
      <div className="w-full p-4">
        <div className="flex flex-row mb-4 justify-between">
          <img src={`assets/projects/${imgName}`} alt="" className="w-2/5 h-26" />
          <div className="flex flex-col justify-around">
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <button className=" rounded-3xl border-blue-700 text-blue-700 font-semibold border-2 py-1 px-4 w-20">
                  Live
                </button>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <button className="rounded-3xl border-blue-700 text-blue-700 font-semibold border-2 py-1 px-4 w-20">
                  Code
                </button>
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center border-b-[1px] border-gray-300">
          <div>
            <h2 className="text-2xl font-semibold pb-2">{name}</h2>
            {madeAt && <span className="mr-4">Made at {madeAt}</span>}
          </div>
          <span className="mr-4">{date}</span>
        </div>
        <div className="flex flex-row justify-between mb-6"></div>
        <p className="mb-4">{description}</p>
        <div className="w-full border-gray-300 border-b-[1px] pb-6 mb-6">
          <p className="text-lg">Key features:</p>
          {features.map((feature, index) => (
            <p key={index} className="text-sm">
              • {feature}
            </p>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-2 grid-cols-3">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="border-gray-300 rounded-3xl border-[1px] py-1 px-4 flex justify-center items-center text-gray-700 bg-gray-200"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectTile.propTypes = {
  imgName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  madeAt: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  technologies: PropTypes.array.isRequired,
  link: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectTile;
