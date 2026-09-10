import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#202328] text-[#E8E9E7] font-sans flex flex-col">
      <Navbar />
      
      <div className="h-20 sm:h-24 w-full"></div>

      <main className="grow site-container max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-display text-[#E8E9E7]">
          Disclaimer
        </h1>

        <div className="space-y-6 text-[#a9b0ba] text-base leading-relaxed">
          <p>
            The information available on <strong className="text-[#E8E9E7]">Room801apk.com</strong> is provided for general informational purposes. We publish guides, game information, download details, and other content related to Room 801.
          </p>

          <p>
            Room801apk.com is an independent website and is not the official website of the Room 801 game or its developer unless clearly stated on a specific page.
          </p>

          <p>
            Some information may come from third-party sources and may change over time. Users should check files and links before using them. We are not responsible for problems caused by third-party websites, files, or services.
          </p>

          <p>
            If you find incorrect information on our website, please contact us so we can review it.
          </p>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}