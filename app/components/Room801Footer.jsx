'use client';

export default function Room801Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-12 pb-8 mt-16 border-t border-[#59616D]/30 bg-[#202328] text-[#a9b0ba] font-sans relative z-10">
      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-[#59616D]/20">
          
          {/* Column 1: Brand / Logo & Info */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#30363D] border border-[#59616D]/40 flex items-center justify-center overflow-hidden">
                <img 
                  src="/room-801-apk-logo (1).webp" 
                  alt="Room 801 Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-lg font-bold text-[#E8E9E7] font-display tracking-wide">
                ROOM <span className="text-[#A9433E]">801</span>
              </span>
            </div>

            <p className="text-sm text-[#a9b0ba] leading-relaxed max-w-sm">
              A psychological loop and anomaly detection horror puzzle adventure for Android. Escape the 8th floor dormitory corridor before the anomalies take hold.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#747d8a] font-mono">
              <span>Build v2.3</span>
              <span>•</span>
              <span>Android 5.0+</span>
              <span>•</span>
              <span>Size: 48.2 MB</span>
            </div>
          </div>

          {/* Column 2: Utility / Legal Pages */}
          <div className="flex flex-col items-start space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A9433E] font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about-us" className="hover:text-[#E8E9E7] transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-[#E8E9E7] transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-[#E8E9E7] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="hover:text-[#E8E9E7] transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-[#E8E9E7] transition-colors">Disclaimer</a>
              </li>
              <li>
                <a href="/dmca" className="hover:text-[#E8E9E7] transition-colors">DMCA</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="pt-6 pb-6 text-xs text-[#747d8a] leading-relaxed max-w-4xl border-b border-[#59616D]/20">
          <p>
            <strong className="text-[#a9b0ba]">Disclaimer:</strong> Room 801 is a standalone indie horror experience with mature 18+ themes. APK files should always be scanned and downloaded from authentic sources. This resource provides gameplay information, installation instructions, and community guidance.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#747d8a]">
          <p>© {new Date().getFullYear()} Room 801 APK. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#E8E9E7] transition-colors cursor-pointer font-medium"
          >
            Back to Top <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}