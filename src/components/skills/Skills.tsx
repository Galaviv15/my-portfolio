import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./skills.css";

function Skills() {

  let[carousellSetting, setCarousellSetting] = useState({
    className: "skills-slider",
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3
  })


  useEffect(()=> {
    function handleWindowResize(){
      if(window.innerWidth < 960 && window.innerWidth > 501){
        setCarousellSetting((prevState)=> ({
          ...prevState,
          className: "skills-slider",
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1
        }))
      }
      else if(window.innerWidth <= 501){
      setCarousellSetting((prevState)=> ({
        ...prevState,
        className: "skills-slider",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }))
    }else{
      setCarousellSetting((prevState)=> ({
        ...prevState,
        className: "skills-slider",
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3
      }))
    }
    }

    window.addEventListener("resize", handleWindowResize)
  },[])


  let skills = [
    { name: "HTML", url: "images/skills-images/html-logo.png" },
    { name: "CSS", url: "images/skills-images/css-logo.png" },
    { name: "Javascript", url: "images/skills-images/js-logo.png" },
    { name: "Typescript", url: "images/skills-images/ts-logo.png" },
    { name: "JQuery", url: "images/skills-images/jQuery-logo.png" },
    { name: "React", url: "images/skills-images/react-logo.png" },
    { name: "Java", url: "images/skills-images/java-logo.png" },
    { name: "Spring", url: "images/skills-images/spring-logo.png" },
    { name: "NodeJS", url: "images/skills-images/nodejs-logo.png" },
    { name: "MySQL", url: "images/skills-images/mysql-logo.png" },
    { name: "GCP", url: "images/skills-images/gcp-logo.png" },
    { name: "Linux", url: "images/skills-images/linux-logo.png" },
    { name: "Android", url: "images/skills-images/android-logo.png" },
  ];


  return (
    <div id="skills-section" className="Skills">
      <h2 className="skills-header">My Skills</h2>
      
      <Slider {...carousellSetting}>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[0].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[1].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[2].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[3].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[4].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[5].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[6].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[7].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[8].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[9].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[10].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[11].url} alt="" />
        </div>
        <div className="skill-logo">
          <img className="skill-logo-img" src={skills[12].url} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Skills;
