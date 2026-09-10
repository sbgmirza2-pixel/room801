export default function Room801Troubleshooting() {
  const problems = [
    {
      title: "APK Won't Install",
      description: "If the APK does not install, first check that the download finished correctly. A file that is broken or not fully downloaded can stop the installation process from working. Check your device storage space and confirm that Android allows your browser or file manager to install apps from the place you install. If the issue still happens, the APK might not work with your Android."
    },
    {
      title: "Game Crashes",
      description: "A game that suddenly close have a compatibility issue or a memory problem. Close all apps that are running in the background and restart your phone. It helps to clear glitches. Clear the game’s cache. If the game keeps crashing every time you open it, make sure you downloaded the version for your device. Sometimes the wrong version can crash the game."
    },
    {
      title: "Game Runs Slowly",
      description: "The game shows issues on phones or devices that have limited RAM. Before you start playing, close any apps that you are not using. If the game has graphics or performance settings turning them down can make a difference. Keep your phone updated. It can also fix some compatibility issues."
    },
    {
      title: "Downloaded File Doesn't Work",
      description: "If the downloaded file does not open or install, it may have been corrupted during the download. Delete the downloaded file. Download it again from a reliable source. Check the file extension. Make sure you downloaded the actual APK than a misleading file. If a website asks you to install another application before providing the game, it is better to leave that page."
    }
  ];

  return (
    <section id= "troubleshooting"className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          Common Problems and <span className="text-[#A9433E]">Their Solutions</span>
        </h2>
        <p className="text-sm sm:text-base text-[#747d8a] mb-6">
          Some common problems and their solutions for Room 801 Gameplay are following:
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-8" />

        {/* Clean Non-Boxed List Layout */}
        <div className="w-full max-w-3xl space-y-8 font-sans">
          {problems.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1.5">
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