export default function Room801Info() {
  const gameInfo = [
    { label: "GAME NAME", value: "Room 801 APK" },
    { label: "CATEGORY", value: "Horror / Anomaly Puzzle" },
    { label: "FILE SIZE", value: "48.2 MB" },
    { label: "CURRENT VERSION", value: "v2.3 (Latest Update)" },
    { label: "SUPPORTED OS", value: "Android (5.0+ Compatible)" },
    { label: "COMMUNITY VOTES", value: "218 Votes (4.8 / 5.0)" },
    { label: "CONTENT RATING", value: "Mature 18+ & Adult Themes" },
    { label: "LICENSE & ACCESS", value: "Free APK / Offline Mode" },
  ];

  return (
    <section className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          Room 801 <span className="text-[#A9433E]">Game Information</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#747d8a] mb-6">
          Official build parameters, device compatibility, and file details for Room 801 APK v2.3.
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-8" />

        {/* Individual Cards Grid Layout matching the screenshot */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
          {gameInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#30363D] to-[#252930] border border-[#59616D]/40 hover:border-[#A9433E]/50 transition-all rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex flex-col justify-center"
            >
              <span className="text-[10px] sm:text-xs text-[#747d8a] font-bold uppercase tracking-wider mb-1.5">
                {item.label}
              </span>
              <span className="text-sm sm:text-base text-[#E8E9E7] font-semibold">
                {item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}