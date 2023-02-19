import React from "react";
import SvgBootstrap from "../../assets/iconComponents/Bootstrap";
import SvgCss3 from "../../assets/iconComponents/Css3";
import HtmlFill from "../../assets/iconComponents/HtmlFill";
import Javascript from "../../assets/iconComponents/Javascript";
import Reactjs from "../../assets/iconComponents/Reactjs";
import Github from "../../assets/iconComponents/Github";
import resume from '../../assets/resume.pdf'
function About() {
  return (
    <section className="about text-center ">
      <div className="about-content d-inline-block  align-middle">
        <p className="h3  align-middle p-5">
          I am a developer who studies and makes websites using ReactJS,
          JavaScript, HTML5, CSS, Bootstrap. I enjoy creating website. I've done
          multiple small projects to learn basics and now doing more complex
          projects.
        </p>
      </div>
      <div>
        <a href={resume} download className="btn-resume rounded p-3 text-decoration-none fw-bold">Download My Resume</a>
      </div>
      <div className="about-container
      " >
        <p className="h1 p-5"> Languages and tools I use:</p>
        <div className="about-svg h1">
          <SvgBootstrap />
          <HtmlFill />
          <SvgCss3 />
          <Javascript />
          <Reactjs />
          <Github />
        </div>
      </div>
    </section>
  );
}
export default About;
