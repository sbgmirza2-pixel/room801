import Navbar from "./components/Navbar";
import HeroRoom801 from "./components/HeroRoom801";
import WhatIsRoom801Page from "./components/WhatIsRoom801";
import Room801InfoSection from "./components/Room801InfoSection";
import Room801Gameplay from "./components/Room801Gameplay";
import Room801Features from "./components/Room801Features";
import Room801DownloadGuide from "./components/Room801DownloadGuide";
import Room801InstallGuide from "./components/Room801InstallGuides";
import Room801ProsAndCons from "./components/Room801ProsAndCons";
import Room801Comparison from "./components/Room801Comparison";

export default function Home() {
  return (
    <div className="site-wrapper bg-darkBg min-h-screen">
      <Navbar />
      <main>
        <HeroRoom801 />
         {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <WhatIsRoom801Page />
         {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801InfoSection />
          {/* Horizontal Divider Line */}

            <hr className="w-full border-t border-[#59616D]/30 mb-6" />
        <Room801Gameplay />
          {/* Horizontal Divider Line */}

            <hr className="w-full border-t border-[#59616D]/30 mb-6" />
        <Room801Features />
        {/* Horizontal Divider Line */}

            <hr className="w-full border-t border-[#59616D]/30 mb-6" />
        <Room801DownloadGuide />
         {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />
        <Room801InstallGuide />

            {/* Horizontal Divider Line */}

            <hr className="w-full border-t border-[#59616D]/30 mb-6" />
            <Room801ProsAndCons />

             {/* Horizontal Divider Line */}

            <hr className="w-full border-t border-[#59616D]/30 mb-6" />
            <Room801Comparison />
             {/* Horizontal Divider Line */}

            <hr className="w-full border-t border-[#59616D]/30 mb-6" />
      </main>
    </div>
  );
}