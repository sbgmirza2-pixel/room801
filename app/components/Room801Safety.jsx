export default function Room801Safety() {
  const safetyTips = [
    "Download the APK from a trusted source.",
    "Before opening check the APK file.",
    "Enable Google Play Protect or my device's security features to protect the APK.",
    "Do not give the APK unnecessary permissions to access data.",
    "Avoid APKs from suspicious websites because they can be risky.",
    "Update my Android system to fix problems",
    "Delete the APK file after installation if you no longer need. It keeps space clean.",
    "If something looks unusual, uninstall the APK."
  ];

  return (
    <section id="safety" className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          Is Room 801 APK <span className="text-[#A9433E]">Safe to Install?</span>
        </h2>
        <p className="text-sm sm:text-base text-[#747d8a] mb-4">
          An APK file is safe or not it depends on where you download it. When you download an APK from an untrusted website, it is dangerous as you don't know the original file is modified or not.
        </p>

        {/* Subheading for Safety Tips */}
        <h3 className="text-lg font-bold text-[#E8E9E7] font-display mb-3 mt-4">
          Safety Tips
        </h3>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        {/* Safety Tips Clean List with Normal Text & Tight Spacing */}
        <div className="w-full max-w-3xl space-y-1 font-sans">
          {safetyTips.map((tip, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 py-1.5 px-3 rounded-xl border border-transparent hover:border-[#A9433E]/50 transition-all"
            >
              <span className="text-[#A9433E] font-bold mt-0.5">•</span>
              <span className="text-sm sm:text-base text-[#a9b0ba] leading-relaxed">
                {tip}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}