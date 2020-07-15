import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return(
    <footer className="text-center leading-7 my-10">
      <div className="mx-5">
        <a href="https://twitter.com/mk__fair" className="mr-5">< FontAwesomeIcon icon={faTwitter} className="text-3xl"/></a>
        <a href="https://github.com/MK776" className="ml-5">< FontAwesomeIcon icon={faGithub}  className="text-3xl"/></a>
      </div>
      <h2 className="text-xl pt-5">Contact</h2>
    </footer>
  );
}


export default Footer;