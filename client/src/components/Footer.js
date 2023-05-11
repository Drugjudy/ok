import {Link} from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

export default function Footer() {

    const Links = [
    ]

    return (
      <div className="footer">
       <div className="left">
        <div className="nav-logo">Stud-e</div>
        &copy; 2022
       </div>
       <div className="middle">
        <span>Created and Designed by</span><span>Krish Kaushal</span>
        <span><a href="https://www.linkedin.com/in/krish-kaushal-759160239/"><BsLinkedin /></a>{" "}<a href="https://github.com/Drugjudy"><AiFillGithub /></a></span>
        
       </div>
       <div className="right">
        <Link to="/teacher">Become Teacher on Stud-e</Link>
       </div>
      </div>
    );
  }