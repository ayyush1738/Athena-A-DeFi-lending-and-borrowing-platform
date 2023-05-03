import "./accounts.css";
import { Link} from "react-router-dom";
import Login from "./Login";

const Accounts = () => {
  return (
    <div className="whole">
    <nav>
        <ul>
            <a href="index.html" className="index-logo">Logo</a>
            <div className="circular-bar">
                <a href="#" className="active">Home</a>
                <a href="#" className="index-link-blog">Blogs</a>
                <a href="#" className="index-link-contact">Contact</a>
            </div>
            <Link className="index-login" to="/Login">Login</Link>
            <a href="#" className="index-dashboard">GO TO DASHBOARD</a>
        </ul>
    </nav>

    <h1 className="header-txt">
        Speedy <br/>
        <span className="span-padding"></span> Easy & <br/><span className="green">Fast.</span>
    </h1>

    <div
        className="eth-index-logo">
        <img src="imgs/ethereum.png"
        className="eth-logo-official"/>
    </div>

    <div className="img-cont-1"></div>
    <div className="img-cont-2"></div>
    <div className="img-cont-3"></div>
    <div className="img-cont-4"></div>

    <a href="#">
        <div className="mouse"></div>
    </a>

    <h1 className="header-para">
        Advanced team,<br/>digital design botique <br/>with focus on aesthetics.
    </h1>

    <a href="#" className="watch-vid">Watch Video</a>

    <h1 className="intro-txt">A new <span className="green">NFT ecosystem</span> for culture & creativity, built efficiently
        with <span className="green">ethereum.</span></h1>

    <a href="#" className="learn-more">Learn More</a>

    <img src="imgs/push.png" className="push"/>
    <img src="imgs/worldcoin.png" className="coin"></img>
    
    </div>
  );
};

export default Accounts;
