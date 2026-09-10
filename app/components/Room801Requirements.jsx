export default function Room801Requirements() {
  const requirements = [
    {
      title: "Android Compatibility",
      description: "It must be compatible with Android version"
    },
    {
      title: "Free Storage",
      description: "Enough free storage for the APK and installed game"
    },
    {
      title: "Memory (RAM)",
      description: "Enough RAM for smooth gameplay"
    },
    {
      title: "Device Stability",
      description: "A stable device without any major system issues"
    },
    {
      title: "Extra Storage Space",
      description: "Extra storage space for game data if needed"
    }
  ];

  return (
    <section className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          Room 801 APK <span className="text-[#A9433E]">Requirements</span>
        </h2>
        <p className="text-sm sm:text-base text-[#747d8a] mb-6">
          Check out the necessary specifications to ensure your device runs the game smoothly.
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-8" />

        {/* Clean Non-Boxed List Layout */}
        <div className="w-full max-w-3xl space-y-6 font-sans">
          {requirements.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#A9433E] font-bold text-base">•</span>
                <h3 className="text-base sm:text-lg font-semibold text-[#E8E9E7] font-display">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#a9b0ba] leading-relaxed pl-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}