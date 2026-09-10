export default function Room801InstallGuide() {
  const installSteps = [
    {
      title: "Open Phone Settings",
      description: "Open the Settings menu on your Android phone."
    },
    {
      title: "Navigate to Security",
      description: "Find the security or app installation settings on your Android device."
    },
    {
      title: "Allow Unknown Sources",
      description: "If Android asks for permission, allow your browser or file manager to install apps from that source."
    },
    {
      title: "Open APK File",
      description: "Open the Downloads folder and tap on the Room 801 file."
    },
    {
      title: "Complete Installation",
      description: "Select Install. Wait for the Room 801 APK installation process to complete."
    },
    {
      title: "Test the Game",
      description: "After installing the Room 801 APK, open the game and check whether the app works or not."
    },
    {
      title: "Revert Permissions",
      description: "You can turn off the Room 801 APK installation permission again after installing the APK."
    }
  ];

  return (
    <section className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          How to Install Room 801 <span className="text-[#A9433E]">APK on Android?</span>
        </h2>
        {/* Normal text size applied to subtitle */}
        <p className="text-sm sm:text-base text-[#747d8a] mb-6">
          Follow these straightforward steps to safely configure your device settings and install the Room 801 APK.
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        {/* Installation Steps Clean List */}
        <div className="w-full max-w-2xl space-y-6 font-sans">
          {installSteps.map((step, index) => (
            <div key={index} className="flex flex-col pb-4 border-b border-[#59616D]/20 last:border-b-0 last:pb-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[#A9433E] font-bold text-sm">
                  0{index + 1}.
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#E8E9E7] font-display">
                  {step.title}
                </h3>
              </div>
              {/* Normal text size applied to description */}
              <p className="text-sm sm:text-base text-[#a9b0ba] leading-relaxed pl-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}