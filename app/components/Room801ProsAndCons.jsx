export default function Room801ProsAndCons() {
  const pros = [
    "The game has simple controls which are easy to understand",
    "Horror gameplay based on observation",
    "Repeat rooms make small changes easy to notice",
    "Creates tension but does not relying on jump scares",
    "It is available on compatible Android devices",
    "Short gameplay sessions are convenient"
  ];

  const cons = [
    "The experience may feel repetitive after loops.",
    "Some players slow pace can be frustrating",
    "Game performance can vary between Android devices.",
    "APK installation requires steps when it is not from the Google Play Store.",
    "Compatibility may differ, and it depends on the Android version."
  ];

  return (
    <section className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          Pros and Cons of Room <span className="text-[#A9433E]">801</span>
        </h2>
        {/* Normal text size applied to subtitle */}
        <p className="text-sm sm:text-base text-[#747d8a] mb-6">
          Below are some pros and cons of this game you should know:
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-8" />

        {/* Two Column Layout for Pros and Cons without default boxes, hover outline */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          
          {/* Pros Column */}
          <div className="bg-transparent border border-transparent hover:border-[#A9433E]/50 transition-all rounded-2xl p-6">
            <h3 className="text-lg font-bold text-[#E8E9E7] font-display mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              Pros
            </h3>
            <ul className="space-y-3">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-[#a9b0ba] leading-relaxed">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Column */}
          <div className="bg-transparent border border-transparent hover:border-[#A9433E]/50 transition-all rounded-2xl p-6">
            <h3 className="text-lg font-bold text-[#E8E9E7] font-display mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A9433E]"></span>
              Cons
            </h3>
            <ul className="space-y-3">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-[#a9b0ba] leading-relaxed">
                  <span className="text-[#A9433E] font-bold mt-0.5">✕</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}