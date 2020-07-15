import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPencilAlt, faFire } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return(
    <header className="grid grid-cols-1 md:grid-cols-2">
      <h2 className="text-center md:text-left font-extrabold col-start-1 col-end-3　sm:col-end-2">MK"s portfolio</h2>
      <ul className="text-gray-800 grid grid-cols-3 text-center md:text-right mt-5 md:col-start-2 md:col-end-3">
        <li>
          <Link href="/">
            <a className="text-xl text-gray-600"><FontAwesomeIcon icon={faUserCircle} className="text-2xl mr-2 text-gray-800" />About</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a className="text-xl text-gray-600"><FontAwesomeIcon icon={faPencilAlt} className="text-2xl mr-2 text-gray-800" />Works</a>
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <a className="text-xl text-gray-600"><FontAwesomeIcon icon={faFire} className="text-2xl mr-2 text-gray-800" />Skills</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}


export default Header;