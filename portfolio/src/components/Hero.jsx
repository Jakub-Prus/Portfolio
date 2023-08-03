import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row items-center justify-center w-[90%] mb-20">
      <div className="bg-[url(./assets/avatar.png)] h-52 w-52 bg-cover bg-center rounded-full mb-4"></div>
      <div className="flex-col flex items-center justify-center">
        <h1 className="text-3xl font-bold mb-3">Jakub Prus</h1>
        <h2 className="text-center mb-3">
          I'm a Front-End Developer passionate about creating creative solutions and
          experiences on the web.
        </h2>
        <div className="flex flex-row justify-center items-center">
          <a href="https://github.com/Jakub-Prus">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/jakub-prus/" className="ml-4">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
