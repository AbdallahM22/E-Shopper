import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./Head.module.css";

const Head = () => {
  return (
    <header className={`${classes.header} `}>
      <div className="container-fluid py-2">
        <div className="row">
          <ul className="d-none col list-unstyled d-sm-flex my-0">
            <li className='ms-0'>
              <Link to='/' className="text-decoration-none" >
                FAQs
              </Link>
            </li>
            <li className={classes.help}>
              <Link to='/' className="text-decoration-none" >
                Help
              </Link>
            </li>
            <li>
              <Link to='/' className="text-decoration-none" >
                Support
              </Link>
            </li>
          </ul>
          <ul className="col list-unstyled d-flex justify-content-center justify-content-sm-end my-0">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li  className='me-0'>
              <Link to="/">
                <FontAwesomeIcon icon={faYoutube}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Head;
