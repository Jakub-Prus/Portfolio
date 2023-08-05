import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SectionTitle from "./SectionTitle";


const Footer = () => {
  const MySwal = withReactContent(Swal);
  return (
    // <div className="w-full h-60 bg-gradient-to-tr from-[#00b7c7] to-[#4d0ce8]">
    <div className="w-[90%] mb-12 ">
      <SectionTitle title="Get in touch" subtitle="Always looking for growth" />
      <div className="flex flex-row justify-center items-center gap-6 mt-8">
        <MailOutlineIcon
          fontSize="large"
          onClick={() => {
            navigator.clipboard.writeText("jakub.prus03@gmail.com");
            MySwal.fire({
              title: (
                <p>
                  My email: <br />
                  jakub.prus03@gmail.com <br />
                  copied to clipboard
                </p>
              ),
              confirmButtonColor: "#00b7c7",
            });
          }}
          className="cursor-pointer"
        />
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
      <div className="flex items-center justify-center mt-6">
        <a
          href="resume.pdf"
          target="_blank"
          rel="noreferrer"
          className=" bg-gray-200 font-bold rounded-3xl py-2 px-8 justify-center items-center dark:text-black"
        >
          See a pdf of my resume
        </a>
      </div>
    </div>
  );
};

export default Footer;
