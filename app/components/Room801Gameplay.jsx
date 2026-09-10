export default function Room801Gameplay() {
  const steps = [
    {
      title: "Explore the Environment",
      description: "Players walk through the eighth-floor hallway. Observe the area. Doors, lights, signs, objects, and sounds can provide details. Moving slowly, it is easier for players to notice anything that looks different."
    },
    {
      title: "Find Hidden Clues",
      description: "Small details help players to see what has changed. Some clues can appear on objects, room numbers, posters, lights, or other parts of the hallway. Players should remember the environment before choosing."
    },
    {
      title: "Detect Unusual Changes",
      description: "Anomalies are the main part of this gameplay. They can show as objects, strange sounds, odd figures, missing items, or different visuals. Some of these changes are easy to notice, but others need careful attention."
    },
    {
      title: "Solve Puzzles and Progress",
      description: "The main challenge is to figure out if the hallway is normal or contains an anomaly. If something unusual appears, the player should return to Room 801. If everything looks normal, the player can continue."
    }
  ];

  return (
    <section id="gameplay"className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading with Red Accent */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-display text-[#E8E9E7]">
          How Does Room 801 <span className="text-[#A9433E]">Gameplay Work?</span>
        </h2>

        {/* Horizontal Divider Line */}
        <hr className="w-full border-t border-[#59616D]/30 mb-6" />

        {/* Introduction Context */}
        <p className="text-sm sm:text-base text-[#a9b0ba] max-w-2xl leading-relaxed mb-6 font-sans">
          Here are the main steps that explain how the Room 801 gameplay works:
        </p>

        {/* Gameplay Steps Clean List */}
        <div className="w-full max-w-2xl space-y-6 font-sans">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col pb-4 border-b border-[#59616D]/20 last:border-b-0 last:pb-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[#A9433E] font-bold text-sm">
                  0{index + 1}.
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#E8E9E7] font-display">
                  {step.title}
                </h3>
              </div>
              {/* Normal text size applied here */}
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