"use client";

import { useState } from 'react';

export default function HeroRoom801() {
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Room 801 APK';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="py-12 md:py-16 relative z-10">
      <div className="site-container flex flex-col items-start text-left">
        
        {/* Main Heading with Space Grotesk Font */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-display">
          Room 801 <span className="text-[#A9433E]">APK</span>
        </h1>

        {/* Paragraph Description */}
        <p className="text-sm sm:text-base text-[#a9b0ba] max-w-2xl leading-relaxed mb-6 font-sans">
          Room 801 is a slow moving game which focused on puzzle-solving and careful item interaction. It creates a mood for exploration. The main goal of this game is to find the differences or strange things in the hallways. To move forward, you have to make the right choice. It is available on Android from various third party mobile app sites via APK.
          <br /><br />
          In this article, we will discuss what the Room 801 game is. Its features, how it works, download and installation steps, safety tips, and how it is different from other horror games.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-6">
          <a 
            href="/download" 
            className="inline-flex items-center gap-2.5 bg-[#A9433E] hover:bg-[#bd4c47] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(169,67,62,0.35)] transition-all no-underline"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>Download APK (48.2 MB)</span>
          </a>

          <a 
            href="#installation"
            className="inline-flex items-center gap-2.5 bg-[#30363D] hover:bg-[#373e46] text-[#E8E9E7] font-semibold text-sm px-6 py-3.5 rounded-xl border border-[#59616D]/40 hover:border-[#A9433E] transition-all no-underline"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span>Installation Guide</span>
          </a>
        </div>

        {/* Ratings & Share Info Bar */}
        <div className="bg-gradient-to-r from-[#21262d] via-[#282e38] to-[#21262d] border border-[#59616D]/50 hover:border-[#A9433E]/60 transition-all rounded-xl flex items-center justify-between py-1.5 px-3 max-w-[240px] w-full shadow-lg">
          
          {/* Ratings Section */}
          <div className="flex items-center gap-1.5">
            <div className="px-1.5 py-0.5 rounded bg-[#A9433E]/15 border border-[#A9433E]/30 text-[#A9433E] text-[10px] font-bold font-display uppercase tracking-wider">
              Rating
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-xs text-[#E8E9E7] tracking-wide">4.8</span>
              <span className="text-[10px] text-[#a9b0ba] font-medium">/ 5.0</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-5 bg-[#59616D]/40 mx-1"></div>
          
          {/* Enhanced Share Button */}
          <button 
            onClick={() => setShowShareModal(true)}
            className="group inline-flex items-center justify-center text-xs text-[#E8E9E7] hover:text-white transition-all bg-[#1a1d23] hover:bg-[#A9433E] p-1.5 rounded-lg border border-[#59616D]/40 hover:border-[#A9433E] cursor-pointer shadow-sm hover:shadow-[0_0_10px_rgba(169,67,62,0.4)]"
            title="Share This Page"
          >
            <span className="p-1 rounded bg-[#30363D] group-hover:bg-white/20 transition-colors text-[#A9433E] group-hover:text-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
            </span>
          </button>
        </div>

      </div>

      {/* Share Modal Popup */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-[#202328] border border-[#59616D]/60 w-full max-w-sm rounded-xl shadow-2xl overflow-hidden relative">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#59616D]/40 bg-[#252930]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#A9433E] rounded-xs"></span>
                <span className="text-xs font-bold tracking-wider text-[#E8E9E7] uppercase font-display">Share This Page</span>
              </div>
              <button 
                onClick={() => setShowShareModal(false)}
                className="text-[#a9b0ba] hover:text-white transition-colors cursor-pointer p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* 3x3 Grid Social Icons */}
            <div className="p-4 grid grid-cols-3 gap-2.5">
              
              {/* LinkedIn */}
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#0A66C2] hover:opacity-90 flex items-center justify-center rounded-lg transition-opacity text-white"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

              {/* Facebook */}
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#1877F2] hover:opacity-90 flex items-center justify-center rounded-lg transition-opacity text-white"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>

              {/* Twitter / X */}
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#000000] hover:opacity-90 flex items-center justify-center rounded-lg transition-opacity text-white border border-[#59616D]/30"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + currentUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#25D366] hover:opacity-90 flex items-center justify-center rounded-lg transition-opacity text-white"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>

              {/* Telegram */}
              <a 
                href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#229ED9] hover:opacity-90 flex items-center justify-center rounded-lg transition-opacity text-white"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.195 1.006.131.832.941z"/></svg>
              </a>

              {/* Reddit */}
              <a 
                href={`https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareTitle)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#FF4500] hover:opacity-90 flex flex-col items-center justify-center rounded-lg transition-opacity text-white font-bold"
              >
                <span className="text-2xl leading-none font-sans tracking-tighter">r/</span>
                <span className="text-[10px] mt-1 font-sans uppercase">Reddit</span>
              </a>

              {/* Pinterest */}
              <a 
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(shareTitle)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#E60023] hover:opacity-90 flex items-center justify-center rounded-lg transition-opacity text-white"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.271-.399.165-1.493-.695-2.427-2.875-2.427-4.629 0-3.767 2.738-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.209 0-2.345-.628-2.734-1.367l-.745 2.842c-.27 1.033-1.002 2.328-1.493 3.119 1.12.348 2.307.538 3.525.538 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>

              {/* Tumblr */}
              <a 
                href={`https://www.tumblr.com/widgets/share/tool?postType=link&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareTitle)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-20 bg-[#001935] hover:opacity-90 flex flex-col items-center justify-center rounded-lg transition-opacity text-white border border-[#59616D]/30"
              >
                <span className="text-3xl font-serif font-bold italic leading-none">t</span>
                <span className="text-[9px] mt-1 font-sans uppercase tracking-wider">Tumblr</span>
              </a>

              {/* Copy Link */}
              <button 
                onClick={handleCopyLink}
                className="h-20 bg-[#424852] hover:bg-[#4d5560] flex flex-col items-center justify-center rounded-lg transition-colors text-white cursor-pointer relative"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                <span className="text-[10px] mt-1 font-sans">{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}