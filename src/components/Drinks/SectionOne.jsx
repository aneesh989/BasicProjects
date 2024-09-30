import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Drink.css";
function SectionOne() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section1",
          start: "50% 50%",
          end: "130% 50%",
          scrub: 1,
        },
      });

      tl.to("#strawleaf1", { top: "120%", left: "80%", rotate:90 }, "timeO")
        .to("#strawleaf2", { top: "105%", left: "5%",  rotate:120 }, "timeO")
        .to("#strawberry", { top: "115%", left: "5%",  rotate:360 }, "timeO")
        .to("#strawbunch2", { top: "150%", left: "25%" }, "timeO")
        .to("#strawbunch", { top: "160%", left: "70%" }, "timeO");
    });

    mm.add("(max-width: 799px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section1",
          start: "50% 50%",
          end: "130% 50%",
          scrub: 1,
        },
      });

      tl.to("#strawleaf1", { top: "120%", left: "80%", rotate: 90 }, "timeO")
        .to("#strawleaf2", { top: "105%", left: "5%", rotate: 120 }, "timeO")
        .to("#strawberry", { top: "125%", left: "5%",rotate:360 }, "timeO")
        .to("#strawbunch2", { top: "110%", left: "15%",rotate:360 }, "timeO")
        .to(
          "#strawbunch",
          { top: "160%", left: "35%", width: "65vw" },
          "timeO"
        );
    });
  }, []);

  return (
    <div className="section section1 d-flex bg-gradient-to-r from-pink-700 via-red-500 to-pink-600 ...">
      <h1>strawberry</h1>
      <img id="strawleaf1" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189335/ttvlyf0a00rtiogh1hgv.png" alt="Leaf" />
      <img id="strawbunch2" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189335/ycroxmffi2e4n622xddb.png" alt="strawberry01" />
      <img id="strawleaf2" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189336/l8ewqupcsp2z7solqwwi.webp" alt="Leaf 2" />
      <img id="strawberry" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189335/p7pgsmkpg6j0iexkqo3q.png" alt="strawberry" />
      <img id="strawbunch" src="https://res.cloudinary.com/djmbeywnm/image/upload/v1725189334/crkpvcce0vptgcrawtdk.png" alt="strawbunch" />
    </div>
  );
}

export default SectionOne;
