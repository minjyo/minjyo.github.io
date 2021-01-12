import React from "react";
import { Link } from "react-router-dom";
import github from "../../assets/github-logo.png";
import gmail from "../../assets/gmail-logo.png";
import "./index.css";

const Home = () => {
    return (
        <div className="wrapper">
            <div className="info-box">
                <div className="name-box">민지호</div>
                <div className="intro-box">안녕하세요, 웹 프론트 개발자 민지호입니다.</div>
                <div className="contact-box">
                    <div className="contact">
                        <img className="contact-img" src={github}></img>
                        <div className="contact-text">https://github.com/minjyo</div>
                    </div>
                    <div className="contact">
                        <img className="contact-img" src={gmail}></img>
                        <div className="contact-text">minjyo8823@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="contents">
                <Link to="/VanillaJS">VanillaJS</Link>
            </div>
        </div>
    );
};

export default Home;
