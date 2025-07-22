import React, { useEffect, useRef, useState } from "react";
import "/src/pages/Home.css";


// 💡 Scroll-synced video hook (outside component)
const useScrollSyncedVideo = () => {
  useEffect(() => {
    if (!window.matchMedia("(min-width: 769px)").matches) return;

    const section = document.querySelector("section.vid");
    const video = section?.querySelector("video");

    if (!section || !video) return;

    video.pause(); // Pause initially

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const distance = window.scrollY - section.offsetTop;
          const total = section.clientHeight - window.innerHeight;
          let percentage = distance / total;
          percentage = Math.max(0, Math.min(1, percentage));

          if (video.duration > 0) {
            video.currentTime = video.duration * percentage;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    video.addEventListener("loadedmetadata", handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", handleScroll);
    };
  }, []);
};

const Home = () => {
    const [showSpline, setShowSpline] = useState(false);
  const splineRef = useRef(null);
  // ⏫ Call the hook at the top level
  useScrollSyncedVideo();

  // 👇 Spline loader on mount
useEffect(() => {
  const section = splineRef.current;
  if (!section) return;

  let timeoutId;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        timeoutId = setTimeout(() => setShowSpline(true), 150); // small delay
      } else {
        setShowSpline(false);
        clearTimeout(timeoutId);
      }
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(section);

  return () => {
    observer.disconnect();
    clearTimeout(timeoutId);
  };
}, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.31/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div id="main">
<section className="section-1" ref={splineRef}>
  <div className="bg-video">
    {showSpline && (
      <spline-viewer
        className="spline"
        url="https://prod.spline.design/12AEZqHRDwddklwu/scene.splinecode"
      ></spline-viewer>
    )}
    <div className="video-overlay"></div>
  </div>


        <div className="section-content">
          <h2>
            DISCOVER THE UNIVERSE <br />
            ONE STAR AT A TIME
          </h2>
          <p>Watch the world outside the earth.</p>
          <div className="buttons">
            <a href="#section-2" className="btn btn-primary">
              EXPLORE NOW
            </a>
            <a href="http://localhost:3000" className="btn btn-secondary">
              <span>
                Learn More&nbsp;
                <img
                  className="arrow arrow-default"
                  src="src/assets/rightward-arrow.png"
                  alt="→"
                />
                <img
                  className="arrow arrow-hover"
                  src="src/assets/rightward-arrow-black.png"
                  alt="→"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

     

      <section className="vid">
        <div className="holder">
          <video
            src="/media/video.mp4"
            muted
            playsInline
            preload="auto"
          ></video>
        </div>
      </section>

      <section id="section-2" className="section-gray">
        <div className="sec-2_container">
          <div className="features-grid">
            <div className="text-column">
              <h2 className=" ">Why Choose <span className="text-red">StarScope?</span></h2>
              <p>StarScope is your gateway to the cosmos — offering guided stargazing tours, live sky events, and astrophotography sessions. Whether you're a curious explorer or space nerd, we make the night sky unforgettable.</p>
            </div>
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">01</span>
              </div>
              <h3 className=" ">Premium Stargazing Experience</h3>
              <p>Get guided telescope tours at real observatories and dark-sky sites led by certified astronomy experts.</p>
            </div>
            
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">02</span>
              </div>
              <h3 className=" ">Personalized Astrophotography </h3>
              <p>Capture stunning celestial shots with custom shoots and beginner-friendly workshops.</p>
            </div>
          </div>
          
           
         <div className="features-bottom-row">
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">03</span>
              </div>
              <h3 className=" ">Live Celestial Streams</h3>
              <p>Watch eclipses, meteor showers & more in real time, with expert commentary and global access.</p>
            </div>
            
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">04</span>
              </div>
              <h3 className=" "> Learn & Explore</h3>
              <p>Attend online/offline workshops on telescope handling, astrophysics basics, and night-sky navigation.</p>
            </div>
            
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">05</span>
              </div>
              <h3 className=" ">Member Perks Galore</h3>
              <p> Early bookings, exclusive live streams, discounts, wallpapers, and more with flexible subscription plans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
