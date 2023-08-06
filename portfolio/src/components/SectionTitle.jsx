import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center space-x-4 mb-4">
        <hr className="border-t border-black w-14" />
        <span className="text-xs">{subtitle}</span>
      </div>
      <span className="text-2xl font-semibold">{title}</span>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionTitle;
