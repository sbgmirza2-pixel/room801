export default function Room801Comparison() {
  const comparisons = [
    {
      title: "Granny",
      image: "/grany.webp",
      description: "Granny is a survival horror game. The player starts the game trapped inside a house. The main goal is to escape. Use stealth to survive. Unlike Room 801, the game is about hiding and escaping from the enemy."
    },
    {
      title: "Eyes: The Horror Game",
      image: "/eyes.webp", 
      description: "The Horror Game is about exploring places. The game creates fear through dark areas, sudden dangers, and limited opportunities to stay safe. Players search for items and try to avoid enemies. It has different survival and chase scenes from the Horror Game Room 801."
    },
    {
      title: "Five Nights at Freddy's",
      image: "/friday.webp", 
      description: "Five Nights at Freddy's places players in the role of a security guard who has to work through nights. Players watch cameras. Carefully manage limited resources to stay alive. Unlike Room 801 is about observation, and Five Nights at Freddy's is about monitoring."
    },
    {
      title: "The Nun",
      image: "/the nun.webp", 
      description: "The Nun mixes exploration, puzzles, stealth, and escape-based horror. Players will explore the environment while avoiding caught by the Nun. It focuses more on hiding and running away than, on the anomaly detection that was used in Room 801."
    }
  ];

  return (
    <section className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-display text-[#E8E9E7]">
          Room 801 vs <span className="text-[#A9433E]">Other Horror Games</span>
        </h2>
        <p className="text-sm sm:text-base text-[#747d8a] mb-6">
          Here's the comparison of Room 801 with other Horror Games:
        </p>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-8" />

        {/* Horizontal Row Layout to avoid blog-card feel */}
        <div className="w-full max-w-4xl space-y-4 font-sans">
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#252930]/40 backdrop-blur-md border border-[#59616D]/30 hover:border-[#A9433E]/60 transition-all rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 shadow-[0_4px_20px_rgb(0,0,0,0.2)]"
            >
              {/* Thumbnail Image on the Side */}
              <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden border border-[#59616D]/30 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Details */}
              <div className="flex flex-col justify-center flex-grow text-left">
                <h3 className="text-lg font-semibold text-[#E8E9E7] font-display mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A9433E]"></span>
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