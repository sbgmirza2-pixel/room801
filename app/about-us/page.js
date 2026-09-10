import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#202328] text-[#E8E9E7] font-sans flex flex-col">
      <Navbar />
      
      {/* Balanced explicit spacer to prevent navbar overlap */}
      <div className="h-20 sm:h-24 w-full"></div>

      <main className="grow site-container max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-display text-[#E8E9E7]">
          About <span className="text-[#A9433E]">Us</span>
        </h1>

        <div className="space-y-6 text-[#a9b0ba] text-base leading-relaxed">
          <p>
            Welcome to <strong className="text-[#E8E9E7]">Room801apk.com</strong>. Our website is focused on Room 801 and its related game information. We share simple guides, gameplay details, download information, and useful tips for players.
          </p>

          <p>
            Our goal is to keep the information easy to understand. You can learn about Room 801, its gameplay, anomalies, endings, and installation steps without going through complicated information.
          </p>

          <p>
            We also try to keep our content clear and useful for players who are looking for Room 801 APK information. If you have any question about our website or its content, you can contact us through our Contact Us page.
          </p>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}