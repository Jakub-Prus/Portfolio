import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row items-center justify-center w-[90%] mb-20 md:py-48">
      <div className="bg-[url(./assets/avatar.png)] h-52 w-52 bg-cover bg-center rounded-full mb-4 md:mr-6"></div>
      <div className="flex-col flex items-center justify-center">
        <h1 className="text-3xl font-bold mb-3">Jakub Prus</h1>
        <h2 className="text-center mb-3 md:w-80">
          I'm a Front-End Developer passionate about creating creative solutions and
          experiences on the web.
        </h2>
        <div className="flex flex-row justify-center items-center gap-4">
          <a
            href="resume.pdf"
            target="_blank"
            rel="noreferrer"
            className=" bg-gray-200 font-bold rounded-3xl py-2 px-8 justify-center items-center"
          >
            Resume
          </a>
          <a href="https://github.com/Jakub-Prus" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/jakub-prus/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
