import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

const Skill = ({ text, colorIcon }) => {
  const textCopy = text;
  const imgPath = textCopy.toLowerCase();
  return (
    <div
      className={`w-24 h-24 flex-col flex items-center justify-center border-[1px] border-gray-400 rounded-xl group hover:border-gray-800`}
    >
      <ReactSVG
        src={`assets/skills/${imgPath}.svg`}
        beforeInjection={(svg) => {
          svg.classList.add(
            "w-10",
            "h-10",
            "text-black",
            "fill-current",
            `${colorIcon}`,
            "mb-2"
          );
        }}
        wrapper="span"
      />
      <span className="text-sm">{text}</span>
    </div>
  );
};

Skill.propTypes = {
  text: PropTypes.string.isRequired,
  colorIcon: PropTypes.string.isRequired,
};

export default Skill;
