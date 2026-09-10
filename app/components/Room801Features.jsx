'use client';
import { useState } from 'react';

export default function Room801Features() {
  const [activeTab, setActiveTab] = useState('All');

  const features = [
    // Gameplay Mechanics
    {
      title: "Loop-Based Structure",
      category: "Gameplay Mechanics",
      description: "Room 801 is a repeating loop. This loop makes the game more interesting. Players walk down the hall and see everything near them. When players reach at the end, they need to go back and check the area again."
    },
    {
      title: "Anomaly Detection",
      category: "Gameplay Mechanics",
      description: "The core of Room 801 APK is a simple but have very difficult system of observation. The game challenges players to identify anomalies and irregularities in the environment. These details will tell you something is wrong. Anomalies are supposed subtle and easy to detect."
    },
    {
      title: "Memory-Based Challenges",
      category: "Gameplay Mechanics",
      description: "The game checks how good the player is at remembering the surroundings. A small change may only show when the player compares the playthrough to a previous playthrough. This means memory and attention are key to the player's progress."
    },
    {
      title: "Simple Decision System",
      category: "Gameplay Mechanics",
      description: "Room 801 keeps its decisions simple. In Room 801, players must decide if the hallway looks normal or if it hides an anomaly. That decision tells players to keep walking or to turn. Room 801 is best for those players a goal who don't want complicated controls."
    },
    {
      title: "No Combat Gameplay",
      category: "Gameplay Mechanics",
      description: "Room 801 is not about weapons, fighting, or combating enemies. Players' progress depends on observing their surroundings and choosing carefully. This makes the game different from action-based horror titles."
    },
    {
      title: "Multiple Endings",
      category: "Gameplay Mechanics",
      description: "Player decisions in Room 801 can lead to different outcomes. This way the game can have multiple endings and it pushes players to try different approaches and to enjoy exploring those possibilities."
    },
    
    // Atmosphere & Audio
    {
      title: "Psychological Horror",
      category: "Atmosphere & Audio",
      description: "Room 801 causes fear through constant action and uncertainty. The familiar hallway becomes uncomfortable, and players start to wonder what they saw in Room 801. The slow approach focuses more on experience and perception in every step."
    },
    {
      title: "Atmospheric Sound Design",
      category: "Atmosphere & Audio",
      description: "Sound supports Room 801's horror style. Sounds in the ambient and changes in the audio create tension as players explore the hallway and begin to notice how careful listening reveals differences in Room 801. Some quiet and sudden sounds make the hallway feel stranger."
    },
    {
      title: "Minimalist Visual Design",
      category: "Atmosphere & Audio",
      description: "The visual style of Room 801 keeps the environment simple and focused. Small changes are less distracting and easier to notice. See that objects, lighting, and other details are more important in each loop."
    },
    {
      title: "Environmental Storytelling",
      category: "Atmosphere & Audio",
      description: "Room 801 does not depend on direct explanations to build its mystery. Players understand parts of the experience by watching the environment patterns, and make the story more mysterious. With little changes in the hallway players will know the difference."
    },
    {
      title: "Replay Value",
      category: "Atmosphere & Audio",
      description: "Room 801 encourages replaying as players may notice details that they missed before. Learning the layout also easily detects subtle changes in later attempts and sees how different outcomes add another reason to check Room 801."
    },

    // Mobile & System
    {
      title: "Offline Gameplay",
      category: "Mobile & System",
      description: "Room 801 can be played without an internet connection. After its installation, players can enjoy the game offline. It is great for short gaming sessions when an active connection is not available. It also allows players more freedom to enjoy the game at their own time."
    },
    {
      title: "Simple Touch Controls",
      category: "Mobile & System",
      description: "Room 801 uses controls that are suitable for mobile devices. Its slow pace means players do not need button combinations or fast reactions. This lets players focus more on the environment and its details. The touch controls make movement and interaction feel natural on a phone."
    },
    {
      title: "Short Play Sessions",
      category: "Mobile & System",
      description: "The repeating loops in Room 801 are best for gaming sessions. Players can complete a loop without spending a long time in one sitting. This is convenient for mobile users. It is easy to play for a few minutes during breaks or free time."
    },
    {
      title: "Optimized Mobile Performance",
      category: "Mobile & System",
      description: "Available v2.3 descriptions mention smoother performance, better transitions, audio adjustments, and touch-control improvements for Room 801. These changes are targeted to make the mobile experience more stable and consistent."
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
          Some of the main key features of Room 801 that make the game more exciting and interesting:
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

        {/* Features Grid Cards Layout */}
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