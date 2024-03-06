import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">

          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />

          <div className="AboutBio">

            Hello! My name is <strong>Vishal Sharma</strong>. I'm from India, and I have gained valuable experience through various entry-level positions, enhancing my work ethic, communication skills, and adaptability.


          <br />


            My journey into the world of technology began with a strong passion for problem-solving. During my studies at BITS Pilani, I engaged in fascinating projects, showcasing my skills and developing projects with real-life uses.


          <br />

            I worked as an Web Developer Intern at Rupifi BNPL from August 2022 to December 2022. In this role, I done testing and fixed the website bugs, also collaborated with UI team for enhancing User Experience.

          <br />

            I worked as a Front-end Developer at MATBOOK from July 2023 to December 2023. I built the website from scratch using React, Orchestrated end-to-end website development, guiding the process from conceptualization to deployment. Utilized React.js to create modular, responsive interfaces, elevating the overall user experience.

          <br />

            Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
            <div className="tagline2">
              I have become confident using the following technologies:
            </div>

            

            <Technologies>
              {stackList.map((stack, index) => (
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
