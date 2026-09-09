import Navbar from "./components/Navbar";
import HeroRoom801 from "./components/HeroRoom801";
import WhatIsRoom801Page from "./components/WhatIsRoom801";
import Room801InfoSection from "./components/Room801InfoSection";
import Room801Gameplay from "./components/Room801Gameplay";
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
      </main>
    </div>
  );
}