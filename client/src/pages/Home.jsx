import React, { memo, useEffect, useRef } from 'react';
import "../styles/Home.css";
import { gsap } from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";
import { useStore } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useRecoilValue } from 'recoil';
// import { userState } from '../recoil/atom';

gsap.registerPlugin(Flip, ScrollTrigger);

function Home() {
  console.clear();
  // const user = useRecoilValue(userState);
  
  const store = useStore();
  const user = store.getState();
  // Above 2 line can be replaced by: const user = useSelector(state => state);
  
  // console.log(user);
  // console.log("user: " + user);

  const animat = (planet) => {
    planet
      .to(".dot-line", {
        repeat: -1,
        rotation: "+=360",
        duration: 100,
        ease: "none",
        transformOrigin: "center center"
      })
      .to(
        ".planet-ab",
        {
          repeat: -1,
          rotation: "+=360",
          ease: "none",
          svgOrigin: "566.76 566.76",
          duration: 60
        },
        0
      );
  };

  const featuredText = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const planet = gsap.timeline();
    animat(planet);
    animation(tl, featuredText);
    animationScroll(".box", 500, 1);
    animationScroll(".box1", 200, 1);
  }, []);

  const animation = (tl, el) => {
    tl.from(el, {
      opacity: 1,
      duration: 3,
      x: 1000,
      ease: "elastic",
    });
  };

  const animationScroll = (element, xValue, delay) => {
    gsap.to(element, {
      scrollTrigger: element,
      x: xValue,
      delay: delay,
    });
  };

  return (
    <div className="overflow-hidden body">
      <div className="main_section">
        <main className="main_content">
          <div id="about" className="about sec">
            <div className="about_txt text-justify">
              <h1 className="about_title text-center">ROBOTIX CLUB</h1>
              <p>The Robotix Club of NIT RAIPUR is a vibrant and innovative community that brings together students with a passion for robotics, automation, and technology. Founded on the principles of collaboration, creativity, and hands-on learning, it serves as a dynamic hub where students explore the fascinating world of robotics through various projects, workshops, competitions, and events.</p>
            </div>
            <div className="about_graphic">
              <svg viewBox="-25 0 1133.51 1133.51">
                <g>
                  <circle className="solid_white" cx="566.76" cy="566.76" r="124.77" />
                  <circle className="white_line dot-line" cx="566.76" cy="566.76" r="212.78" />
                  <circle className="white_line dot-line" cx="566.76" cy="566.76" r="300.8" />
                  <circle className="white_line dot-line" cx="566.76" cy="566.76" r="388.38" />
                  <circle className="white_line dot-line" cx="566.76" cy="566.76" r="476.39" />
                  <circle className="white_line dot-line" cx="566.76" cy="566.76" r="566.1" />
                  <circle className="solid_white" cx="566.76" cy="566.76" r="124.77" />
                  <g className="planet-ab">
                    <ellipse cx="182.43" cy="510.49" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M189.76,510.49c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                  <g className="planet-ab">
                    <ellipse cx="55.97" cy="816.04" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M63.29,816.04c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                  <g className="planet-ab">
                    <ellipse cx="437.23" cy="841.18" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M444.56,841.18c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                  <g className="planet-ab">
                    <ellipse cx="792.68" cy="986.97" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M800.01,986.97c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                  <g className="planet-ab">
                    <ellipse cx="566.6" cy="265.8" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M573.93,265.8c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                  <g className="planet-ab">
                    <ellipse cx="1013.63" cy="220.76" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M1020.96,220.76c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                  <g className="planet-ab">
                    <ellipse cx="954.34" cy="560.72" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M961.67,560.72c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                  <g className="planet-ab">
                    <ellipse cx="738.96" cy="445.59" rx="19.5" ry="19.66" />
                    <path className="yellow_fill" d="M746.29,445.59c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default memo(Home);
