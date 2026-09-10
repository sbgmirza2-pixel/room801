export default function Room801DownloadGuide() {
  const downloadSteps = [
    {
      title: "Open Browser",
      description: "Download Chrome or another browser on your Android phone."
    },
    {
      title: "Search the Game",
      description: 'Type "Room 801 APK download" into the search bar. Look for an authentic source of APK.'
    },
    {
      title: "Check Game Page",
      description: "Click the page that shows details about the game, such as its version, file size, and Android requirements."
    },
    {
      title: "Verify Details",
      description: "Before downloading, check that the version and other details match the Room 801 APK game you want to install."
    },
    {
      title: "Download APK File",
      description: "Start the download and wait until the APK file is fully downloaded."
    },
    {
      title: "Locate in Downloads",
      description: "Once the download is complete, open your phone Downloads folder and look for the Room 801 file."
    },
    {
      title: "Security Scan",
      description: "Before opening it, use your device's antivirus or security app to scan the Room 801 APK file."
    }
  ];

  return (
    <section id="download"className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          How to Download Room 801 <span className="text-[#A9433E]">APK on Android?</span>
        </h2>
        {/* Normal text size applied to subtitle */}
        <p className="text-sm sm:text-base text-[#747d8a] mb-6">
          Follow these simple steps to securely find, verify, and download Room 801 on your mobile device.
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        {/* Download Steps Clean List */}
        <div className="w-full max-w-2xl space-y-6 font-sans">
          {downloadSteps.map((step, index) => (
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