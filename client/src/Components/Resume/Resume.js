import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          {props.url ? (
            <a href={props.url}>{props.heading}</a>
          ) : (
            <span>{props.heading ? props.heading : ""}</span>
          )}

          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "SpringBot", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2020" },

      description:
        "Online commerce website for showcasing and selling products online with payment system integration, deploy the application on Heroku",
      subHeading:
        "Technologies Used: Java, SpringBoot, MySQL, Bootstrap, jQuery.",
      url: "",
    },

    {
      title: "Fighting game ",
      duration: { fromDate: "2020", toDate: "2020" },
      description: "fighting game with JavaScript and HTML canvas",
      subHeading: "Technologies Used: JavaScript, HTML.",
      url: "https://wei-fighting-game.netlify.app/",
    },

    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, Node.js",
      url: " https://portfolio-weicui.herokuapp.com/",
    },

    {
      title: "crwn clothing website ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A E-commercial  website using React.js and firebase database",
      subHeading: "Technologies Used:  React , Javascript, HTML, firebase.",
      url: "https://crwn-clothing-wei.netlify.app",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Stevens Institute of Technology, Hoboken NJ"}
        subHeading={"Computer Science"}
        fromDate={"2021"}
        toDate={"Present"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"MeiTuan"}
          subHeading={"Software Engineer INTERN"}
          fromDate={"2020"}
          toDate={"2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Responsible for developing the back-end functionality Spring-based
            Java framework. Implemented third-party payment service by intensive
            collaborations with front-end engineers.
          </span>
          <br />
          <span className="resume-description-text">
            - Redesigned database schema in MySQL and utilized B+ tree indexes
            to reduce the disk reads and query time by 25%.
          </span>
          <br />
          <span className="resume-description-text">
            - During the internship, participated in modifying several bugs of
            the website, optimizing the website interface, and launching new
            functions
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"Stevens Institute of Technology"}
          subHeading={"Teaching Assistant --Algorithm course"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Prepare material before class, update class information, assistant
            professor in the class, grade assignment, answer student's Algorithm
            question and provided private instruction to individual or groups of
            up to 10 students to improve academic performance.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          url={projectsDetails.url}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          //src={require(`../../assets/Resume/${bullet.logoSrc}`).default}

          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
