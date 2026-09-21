"use client";

export default function HeroRoom801() {
  return (
    <section  className="py-12 md:py-16 relative z-10">
      <div className="site-container flex flex-col items-start text-left">
        
        {/* Main Heading with Space Grotesk Font */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-display">
          Room 801 <span className="text-[#A9433E]">APK</span>
        </h1>

        {/* Paragraph Description */}
        <p className="text-sm sm:text-base text-[#a9b0ba] max-w-2xl leading-relaxed mb-6 font-sans">
          Room 801 is a slow moving game which focused on puzzle-solving and careful item interaction. It creates a mood for exploration. The main goal of this game is to find the differences or strange things in the hallways. To move forward, you have to make the right choice. It is available on Android from various third party mobile app sites via APK.
          <br /><br />
          In this article, we will discuss what the Room 801 game is. Its features, how it works, download and installation steps, safety tips, and how it is different from other horror games.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-start gap-3">
          <a 
            href="/download" 
            className="inline-flex items-center gap-2.5 bg-[#A9433E] hover:bg-[#bd4c47] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(169,67,62,0.35)] transition-all no-underline"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>Download APK (48.2 MB)</span>
          </a>

          <a 
            href="#installation"
            className="inline-flex items-center gap-2.5 bg-[#30363D] hover:bg-[#373e46] text-[#E8E9E7] font-semibold text-sm px-6 py-3.5 rounded-xl border border-[#59616D]/40 hover:border-[#A9433E] transition-all no-underline"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span>Installation Guide</span>
          </a>
        </div>

      </div>
    </section>
  );
}