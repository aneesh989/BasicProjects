import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import "./Drink.css";

function SectionThree() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    let mm2 = gsap.matchMedia();

    // for large devices

    mm2.add("(min-width: 800px)", () => {
      let tl2 = gsap.timeline({
          scrollTrigger: {
              trigger: '.section2',
              start: '50% 50%',
              end: '190% 100%',
              // scroller:"body",
              scrub: 1,
          }
      });
      tl2.from('.pineapplecut', {
              y: 500,
              x: -900,
              rotate: -90,
          }, 'time1')
          .from('#pineapple', {
              y: 300,
              x: -700,
              rotate: -90,
              scale:2,
          }, 'time1')
          .from('.kiwicut', {
              y: 500,
              x: 900,
              rotate: 90,
          }, 'time1')
          .from('#kiwi', {
              y: 300,
              x: 700,
              rotate: 90,
          }, 'time1')
  });

    // for small device

    mm2.add("(max-width: 799px)", () => {
      let tl2 = gsap.timeline({
          scrollTrigger: {
              trigger: '.section3',
              start: '0% 90%',
              end: '100% 100%',
              scrub: 1,
          }
      });
      tl2.from('.pineapplecut', {
          y: 500,
          x: -900,
          rotate: -90,
      }, 'time1')
          .from('#pineapple', {
              y: 300,
              x: -700,
              rotate: -90,
              
          }, 'time1')
          
          .from('#resp-strawbunch', {
              y: 500,
              x: 900,
              rotate: 90,
          }, 'time1')
          .from('#resp-strawberry', {
              y: 300,
              x: 700,
              rotate: 90,
          }, 'time1')
          .from('.kiwicut', {
            y: 500,
            x: -900,
            rotate: -90,
        }, 'time1')
        .from('#kiwi', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')
  });
}, []);
  return (
    <div className="section d-flex section3">
      <div className="card d-flex-c">
        <div className="img-div d-flex">
          <img className='pineapplecut' src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189329/waeuyjgdpchg92nbcpnn.png" alt="Pineapple Cut" />
          <img id="pineapple" className=' w-full max-h-screen' src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189329/cp0qaca0rnrmt7izwxbv.png" alt="Pineapple" />
        </div>
        <h1 className="mainHeading">pineapple</h1>
        <button className='btn'>Buy Now</button>
      </div>
      <div className="card d-flex-c">
        <div className="img-div d-flex">
          <img id="resp-strawberry" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189335/p7pgsmkpg6j0iexkqo3q.png" alt="Resp strawberry" />
          <img id="resp-strawbunch" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189335/ycroxmffi2e4n622xddb.png" alt="Resp strawberry" />
        </div>
        <h1 className="mainHeading">strawberry</h1>
        <button className='btn'>Buy Now</button>
      </div>
      <div className="card d-flex-c">
        <div className="img-div d-flex">
          <img  className='kiwicut ' src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189325/nfpu6ypnbh96swsuonij.png" alt="kiwicut" />
          <img id="kiwi" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189324/sanvgikf9wbepbdveqbs.png" alt="kiwi" />
        </div>
        <h1 className="mainHeading">kiwi</h1>
        <button className='btn'>Buy Now</button>
      </div>
    </div>
  );
}

export default SectionThree;
