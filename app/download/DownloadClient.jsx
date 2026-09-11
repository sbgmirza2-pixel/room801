'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';

export default function DownloadClient() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [timeLeft]);

  const handleDownload = () => {
    const apkUrl = "https://instagoldapk.net/downloads/room-801-apk-v2-3.zip"; 
    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', 'room-801-apk-v2-3.zip');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#1a1c23] text-[#d1d5db] flex flex-col justify-between font-sans selection:bg-[#A9433E]/30 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

   

      {/* MAIN CONTENT */}
      <main className="relative py-16 px-2 sm:px-4 overflow-hidden grow">
        {/* Background Smoki Glows */}
        <div className="absolute inset-0 pointer-events-none z-0 blur-[80px] opacity-40">
          <div className="absolute w-[450px] h-[450px] rounded-full mix-blend-screen bg-[rgba(169,67,62,0.35)] top-[10%] left-[10%] animate-pulse"></div>
          <div className="absolute w-[450px] h-[450px] rounded-full mix-blend-screen bg-[rgba(75,85,99,0.35)] bottom-[10%] right-[10%] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-[850px] mx-auto pl-1 sm:pl-2">
          {/* Header & Intro */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#E8E9E7] font-display leading-tight mb-4">
              Download <span className="text-[#A9433E]">Room</span> 801 APK
            </h1>
            <p className="text-base sm:text-lg font-sans leading-relaxed">
              <Link href="/" className="text-[#E8E9E7] hover:text-[#A9433E] font-semibold transition-colors no-underline">
                Room 801
              </Link> is a horror puzzle game where you explore a strange hallway and look for unusual changes. You play as <strong>Hiyori Yasaka</strong>, who must follow a simple rule to reach the end. The game focuses on observation, mystery, and unexpected events.
            </p>
          </div>

          {/* UNIQUE INTERACTIVE TIMER / DOWNLOAD BOX */}
          <div className="bg-[rgba(37,40,48,0.7)] border border-[#A9433E]/40 hover:border-[#A9433E] transition-all duration-300 rounded-2xl p-6 sm:p-8 text-center my-8 shadow-xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A9433E]/10 to-transparent animate-pulse pointer-events-none"></div>
            
            <p className="text-sm sm:text-base text-[#a9b0ba] font-sans mb-6 font-medium">
              {!isReady ? "Just wait a few seconds for the timer, then tap the download button below." : "Your download package is fully optimized and ready!"}
            </p>

            {!isReady ? (
              <div className="inline-flex flex-col items-center justify-center gap-3 bg-[rgba(169,67,62,0.1)] border border-[#A9433E]/60 px-8 py-5 rounded-xl text-[#E8E9E7]">
                <div className="text-4xl font-black font-mono tracking-widest text-[#E8E9E7]">
                  0:{String(timeLeft).padStart(2, '0')}
                </div>
              </div>
            ) : (
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-[#A9433E] hover:bg-[#bd4a44] text-white font-bold px-9 py-4 rounded-xl text-lg shadow-lg shadow-[#A9433E]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Download Room 801 APK (v2.3)
              </button>
            )}
          </div>

          {/* Check These Things First */}
          <section className="mt-10">
            <h3 className="text-2xl font-bold text-[#E8E9E7] font-display mb-4">
              Check <span className="text-[#A9433E]">These</span> Things First
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-[#a9b0ba] font-sans">
              <li className="p-1">Make sure your Android phone has enough free storage.</li>
              <li className="p-1">Check your Android version before installing the APK.</li>
              <li className="p-1">Use a stable internet connection.</li>
              <li className="p-1">Close any old or incomplete Room 801 APK download.</li>
              <li className="p-1">Keep the download page open until the download finishes.</li>
              <li className="p-1">Make sure you have enough battery before starting installation.</li>
            </ul>
          </section>

          {/* Room 801 Download Details Table */}
          <section id="details" className="mt-10">
            <h3 className="text-2xl font-bold text-[#E8E9E7] font-display mb-4">
              <span className="text-[#A9433E]">Room 801</span> Download Details
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[rgba(89,97,109,0.3)] bg-[rgba(37,40,48,0.5)]">
              <table className="w-full text-left text-sm sm:text-base font-sans">
                <tbody>
                  <tr className="border-b border-[rgba(89,97,109,0.3)]">
                    <td className="p-4 font-semibold text-[#E8E9E7]">Game Name</td>
                    <td className="p-4 text-[#a9b0ba]">Room 801</td>
                  </tr>
                  <tr className="border-b border-[rgba(89,97,109,0.3)]">
                    <td className="p-4 font-semibold text-[#E8E9E7]">File Type</td>
                    <td className="p-4 text-[#a9b0ba]">ZIP / APK</td>
                  </tr>
                  <tr className="border-b border-[rgba(89,97,109,0.3)]">
                    <td className="p-4 font-semibold text-[#E8E9E7]">Platform</td>
                    <td className="p-4 text-[#a9b0ba]">Android</td>
                  </tr>
                  <tr className="border-b border-[rgba(89,97,109,0.3)]">
                    <td className="p-4 font-semibold text-[#E8E9E7]">Genre</td>
                    <td className="p-4 text-[#a9b0ba]">Horror Puzzle</td>
                  </tr>
                  <tr className="border-b border-[rgba(89,97,109,0.3)]">
                    <td className="p-4 font-semibold text-[#E8E9E7]">Main Character</td>
                    <td className="p-4 text-[#a9b0ba]">Hiyori Yasaka</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#E8E9E7]">Main Focus</td>
                    <td className="p-4 text-[#a9b0ba]">Finding Anomalies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Download Steps */}
          <section id="steps" className="mt-10">
            <h3 className="text-2xl font-bold text-[#E8E9E7] font-display mb-4">
              How to <span className="text-[#A9433E]">Download</span> Steps
            </h3>
            <ol className="space-y-3 text-sm sm:text-base text-[#a9b0ba] font-sans list-decimal list-inside p-1">
              <li className="pl-1">Scroll to the download section on this page.</li>
              <li className="pl-1">Wait for the secure preparation countdown to complete.</li>
              <li className="pl-1">Tap the Download button.</li>
              <li className="pl-1">Wait for the package file to finish downloading.</li>
              <li className="pl-1">Open your phone&apos;s Downloads folder.</li>
              <li className="pl-1">Find the Room 801 file and extract or install it.</li>
            </ol>
          </section>

          {/* What To Do After Download */}
          <section className="mt-10 mb-8">
            <h3 className="text-2xl font-bold text-[#E8E9E7] font-display mb-3">
              What To Do <span className="text-[#A9433E]">After</span> Download
            </h3>
            <p className="text-sm sm:text-base text-[#a9b0ba] font-sans leading-relaxed p-1">
              After the download finishes, open your Downloads folder and find the Room 801 file. Check the file before you start the installation. If the download stops or the file looks incomplete, download it again instead of trying to install it.
            </p>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Room801Footer />
    </div>
  );
}