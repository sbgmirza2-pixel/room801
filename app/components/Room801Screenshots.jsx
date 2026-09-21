'use client';

import Image from "next/image";

export default function Room801Screenshots() {
  const screenshots = [
    { src: "/pic1.webp", alt: "Room 801 Gameplay Screenshot 1" },
    { src: "/pic2.webp", alt: "Room 801 Gameplay Screenshot 2" },
    { src: "/pic3.webp", alt: "Room 801 Gameplay Screenshot 3" },
    { src: "/pic4.webp", alt: "Room 801 Gameplay Screenshot 4" },
  ];

  return (
    <section className="screenshots-section" id="screenshots">
      {/* Background Smoki Animated Glows */}
      <div className="smoke-bg-container">
        <div className="smoke-blob smoke-blob-1"></div>
        <div className="smoke-blob smoke-blob-2"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Screenshots</h2>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="screenshots-scroll-container">
          <div className="screenshots-track">
            {screenshots.map((item, index) => (
              <div key={index} className="screenshot-card">
                <div className="image-wrapper">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={380}
                    // Pehli image ko priority di hai taake woh foran load ho
                    priority={index === 0}
                    // Lazy loading baqi images ke liye active rakhi hai
                    loading={index === 0 ? "eager" : "lazy"}
                    className="screenshot-img"
                  />
                  {/* Shiny Glaze Layer */}
                  <div className="shine-layer"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .screenshots-section {
          position: relative;
          padding: 20px 0;
          background: #1a1c23;
          overflow: hidden;
        }

        /* Smoki Animated Background Effects */
        .smoke-bg-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          filter: blur(60px);
          opacity: 0.45;
        }

        .smoke-blob {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          mix-blend-mode: screen;
          animation: smokeFloat 12s ease-in-out infinite alternate;
        }

        .smoke-blob-1 {
          background: rgba(169, 67, 62, 0.35);
          top: -20%;
          left: 10%;
        }

        .smoke-blob-2 {
          background: rgba(75, 85, 99, 0.4);
          bottom: -20%;
          right: 10%;
          animation-delay: -6s;
          animation-direction: alternate-reverse;
        }

        @keyframes smokeFloat {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(60px, 40px) scale(1.2);
          }
          100% {
            transform: translate(-40px, 50px) scale(0.9);
          }
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          margin-bottom: 20px;
          text-align: left;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #E8E9E7;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        /* Horizontal Scroll Layout */
        .screenshots-scroll-container {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: #A9433E #30363D;
          padding-bottom: 10px;
        }

        .screenshots-scroll-container::-webkit-scrollbar {
          height: 6px;
        }

        .screenshots-scroll-container::-webkit-scrollbar-track {
          background: #30363D;
          border-radius: 4px;
        }

        .screenshots-scroll-container::-webkit-scrollbar-thumb {
          background: #A9433E;
          border-radius: 4px;
        }

        .screenshots-track {
          display: flex;
          gap: 24px;
          width: max-content;
          padding: 4px;
        }

        .screenshot-card {
          flex: 0 0 520px;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(37, 40, 48, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(89, 97, 109, 0.3);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .screenshot-card:hover {
          transform: translateY(-6px);
          border-color: #A9433E;
          box-shadow: 0 12px 30px rgba(169, 67, 62, 0.3);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          /* Loading ke doran placeholder background */
          background-color: #252830; 
        }

        .screenshot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, opacity 0.3s ease;
        }

        .screenshot-card:hover .screenshot-img {
          transform: scale(1.06);
        }

        /* Shine Layer Animation */
        .shine-layer {
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.25),
            transparent
          );
          pointer-events: none;
          transform: skewX(-20deg);
        }

        .screenshot-card:hover .shine-layer {
          animation: shineEffect 0.8s ease-in-out forwards;
        }

        @keyframes shineEffect {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(32, 35, 40, 0.4), transparent);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .screenshot-card {
            flex: 0 0 350px;
          }
          .image-wrapper {
            height: 220px;
          }
          .section-title {
            font-size: 1.6rem;
          }
          .smoke-blob {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}