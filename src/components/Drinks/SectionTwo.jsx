import React, { useEffect } from 'react';
import "./Drink.css";
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function SectionTwo() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        gsap.registerPlugin(ScrollTrigger);
    
        let mm2 = gsap.matchMedia();

        mm2.add("(min-width: 800px)", () => {
          let tl2 = gsap.timeline({
              scrollTrigger: {
                  trigger: '.section2',
                  start: '50% 50%',
                  end: '200% 100%',
                  scrub: 1,
              }
          });
          tl2.to('#strawberry', {
              top: "220%",
              left: "38%",
              width: "23vw",
          }, 'time1')
              .to('#strawbunch2', {
                  top: "220%",
                  left: "40%",
                  width: "20vw",
              }, 'time1')
      });
    }, []);
  return (
    <div className="section d-flex section2">
      <div className="lft d-flex">
        <div className="magicpattern bg-gradient-to-r from-pink-700 via-red-500 to-pink-600 ..."></div>
      </div>
      <div className="rght d-flex-c">
        <h1 className="mainHeading">Flavour Updated</h1>
        <p className="mainP">
        Natural fresh chia drinks and refreshing and rich in vitamins. Enjoy this refreshing drink on the go!
        </p>
        <button className='btn' >Check Now</button>
      </div>
    </div>
  );
}

export default SectionTwo;
