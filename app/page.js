export const metadata = {
  title: "Room 801 APK v2.3 – Download Latest Version for Android",
  description: "Download the latest Room 801 APK v2.3 for Android. Explore horror puzzle gameplay, eerie looping hallways, anomalies, guides, and safe installation steps.",
};

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
import Room801Safety from "./components/Room801Safety";
import Room801Requirements from "./components/Room801Requirements";
import Room801Troubleshooting from "./components/Room801Troubleshooting";
import Room801Conclusion from "./components/Room801Conclusion";
import Room801FAQs from "./components/Room801FAQs";
import Room801Footer from "./components/Room801Footer";
import Room801TableOfContents from "./components/Room801TableOfContents";
import Room801Screenshots from "./components/Room801Screenshots";

export default function Home() {
  return (
    <div className="site-wrapper bg-darkBg min-h-screen">
      <Navbar />
      <main>
        <div id="home">
          <HeroRoom801 />
        </div>
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <WhatIsRoom801Page />
      
        <Room801Screenshots />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801InfoSection />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801TableOfContents />
        
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801Gameplay />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <div id="features">
          <Room801Features />
        </div>
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801DownloadGuide />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801InstallGuide />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801ProsAndCons />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801Comparison />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801Safety />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801Requirements />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801Troubleshooting />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <Room801Conclusion />
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        <div id="faqs">
          <Room801FAQs />
        </div>

        <Room801Footer />
      </main>
    </div>
  );
}