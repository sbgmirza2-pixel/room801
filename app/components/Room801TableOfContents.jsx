'use client';

export default function Room801TableOfContents() {
  const sections = [
    { title: "What is Room 801?", id: "what-is-room-801" },
    { title: "Game Overview & Info", id: "overview" },
    { title: "Key Features", id: "features" },
    { title: "Gameplay Experience", id: "gameplay" },
    { title: "System Requirements", id: "requirements" },
    { title: "Download Guide", id: "download" },
    { title: "Installation Guides", id: "installation" },
    { title: "Safety & Play Protect", id: "safety" },
    { title: "Pros and Cons", id: "pros-and-cons" },
    { title: "Horror Comparison", id: "comparison" },
    { title: "Troubleshooting", id: "troubleshooting" },
    { title: "Frequently Asked Questions", id: "faqs" },
    { title: "Conclusion", id: "conclusion" }
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Smooth scroll complete hone ke baad URL mein hash update ho jaye ga
      setTimeout(() => {
        window.history.pushState(null, '', `#${id}`);
      }, 400);
    }
  };

  return (
    <section className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 font-display text-[#E8E9E7]">
            Table of <span className="text-[#A9433E]">Contents</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#a9b0ba] mb-6 font-sans">
            Quickly jump to any section of the Room 801 APK guide below:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-sans">
            {sections.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="text-base sm:text-lg text-[#a9b0ba] hover:text-[#E8E9E7] transition-colors text-left flex items-center gap-2.5 group cursor-pointer"
                >
                  <span className="text-[#A9433E] group-hover:translate-x-0.5 transition-transform text-lg">▸</span>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}