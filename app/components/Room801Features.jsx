'use client';
import { useState } from 'react';

export default function Room801Features() {
  const [activeTab, setActiveTab] = useState('All');

  const features = [
    // Gameplay Mechanics
    {
      title: "Loop-Based Structure",
      category: "Gameplay Mechanics",
      description: "Room 801 is a repeating loop. Players walk down the hall, and when they reach the end, they need to go back and check the area again."
    },
    {
      title: "Anomaly Detection",
      category: "Gameplay Mechanics",
      description: "The core challenge is identifying subtle anomalies and irregularities in the environment that tell you something is wrong."
    },
    {
      title: "Memory-Based Challenges",
      category: "Gameplay Mechanics",
      description: "The game tests your surroundings memory. Small changes require comparing the current run to previous loops to progress."
    },
    {
      title: "Simple Decision System",
      category: "Gameplay Mechanics",
      description: "Players make straightforward choices: decide if the hallway looks normal or hides an anomaly to keep walking or turn back."
    },
    {
      title: "No Combat Gameplay",
      category: "Gameplay Mechanics",
      description: "No weapons or fighting. Your progress entirely depends on careful observation and smart choices."
    },
    {
      title: "Multiple Endings",
      category: "Gameplay Mechanics",
      description: "Your decisions lead to different outcomes, pushing you to try alternate approaches and explore new possibilities."
    },
    
    // Atmosphere & Audio
    {
      title: "Psychological Horror",
      category: "Atmosphere & Audio",
      description: "Builds fear through constant uncertainty and tension, making the familiar hallway feel increasingly uncomfortable."
    },
    {
      title: "Atmospheric Sound Design",
      category: "Atmosphere & Audio",
      description: "Ambient sounds and subtle audio changes build intense tension as you listen closely for differences in the hallway."
    },
    {
      title: "Minimalist Visual Design",
      category: "Atmosphere & Audio",
      description: "A simple visual style keeps objects, lighting, and small loop details focused and easy to notice."
    },
    {
      title: "Environmental Storytelling",
      category: "Atmosphere & Audio",
      description: "Unravels mystery through environment patterns and subtle hallway shifts rather than direct explanations."
    },
    {
      title: "Replay Value",
      category: "Atmosphere & Audio",
      description: "Encourages replaying to catch missed details, learn layouts, and uncover different story outcomes."
    },

    // Mobile & System
    {
      title: "Offline Gameplay",
      category: "Mobile & System",
      description: "Enjoy the game completely offline after installation, perfect for short sessions without an active internet connection."
    },
    {
      title: "Simple Touch Controls",
      category: "Mobile & System",
      description: "Designed for mobile devices with a slow pace, requiring no fast reactions or complex button combinations."
    },
    {
      title: "Short Play Sessions",
      category: "Mobile & System",
      description: "Repeating loops allow you to complete sessions quickly, making it ideal for breaks and free time."
    },
    {
      title: "Optimized Mobile Performance",
      category: "Mobile & System",
      description: "Version 2.3 brings smoother performance, audio tweaks, and improved touch-control stability for mobile."
    }
  ];

  const categories = ['All', 'Gameplay Mechanics', 'Atmosphere & Audio', 'Mobile & System'];

  const filteredFeatures = activeTab === 'All' 
    ? features 
    : features.filter(item => item.category === activeTab);

  return (
    <section className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          Key Features of Room <span className="text-[#A9433E]">801 APK</span>
        </h2>
        <p className="text-sm sm:text-base text-[#747d8a] mb-6">
          Discover the unique elements that distinguish Room 801 from conventional horror titles.
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        {/* Filter Tabs / Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-sans">
          {categories.map((cat, idx) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isActive 
                    ? 'bg-[#A9433E] text-white border-[#A9433E] shadow-[0_0_15px_rgba(169,67,62,0.4)]' 
                    : 'bg-[#30363D] text-[#a9b0ba] border-[#59616D]/40 hover:border-[#A9433E]/50 hover:text-[#E8E9E7]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Features Grid Cards Layout (Category tabs work, but tags inside boxes are removed) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
          {filteredFeatures.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#30363D] to-[#252930] border border-[#59616D]/40 hover:border-[#A9433E]/50 transition-all rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#E8E9E7] font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#a9b0ba] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}