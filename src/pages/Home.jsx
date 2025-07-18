import React, { useEffect } from "react";
import "/src/pages/Home.css";

// 💡 Scroll-synced video hook (outside component)
const useScrollSyncedVideo = () => {
  useEffect(() => {
    if (window.matchMedia("(min-width: 769px)").matches) {
      const section = document.querySelector("section.vid");
      const vid = section?.querySelector("video");

      if (section && vid) {
        vid.pause(); // Pause initially

        const scroll = () => {
          const distance = window.scrollY - section.offsetTop;
          const total = section.clientHeight - window.innerHeight;
          let percentage = distance / total;
          percentage = Math.max(0, Math.min(1, percentage));

          if (vid.duration > 0) {
            vid.currentTime = vid.duration * percentage;
          }
        };

        vid.addEventListener("loadedmetadata", scroll);
        window.addEventListener("scroll", scroll);
        scroll(); // Initial run

        return () => {
          vid.removeEventListener("loadedmetadata", scroll);
          window.removeEventListener("scroll", scroll);
        };
      }
    }
  }, []);
};

const Home = () => {
  // ⏫ Call the hook at the top level
  useScrollSyncedVideo();

  // 👇 Spline loader on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.31/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div id="main">
      <section className="section-1">
        <div className="bg-video">
          <spline-viewer
            className="spline"
            url="https://prod.spline.design/12AEZqHRDwddklwu/scene.splinecode"
          ></spline-viewer>
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
            src="/media/lumino.mp4"
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
