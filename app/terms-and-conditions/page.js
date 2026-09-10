import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#202328] text-[#E8E9E7] font-sans flex flex-col">
      <Navbar />
      
      <div className="h-20 sm:h-24 w-full"></div>

      <main className="grow site-container max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-display text-[#E8E9E7]">
          Terms & <span className="text-[#A9433E]">Conditions</span>
        </h1>

        <div className="space-y-6 text-[#a9b0ba] text-base leading-relaxed">
          <p>
            By using <strong className="text-[#E8E9E7]">Room801apk.com</strong>, you agree to follow these Terms and Conditions. Our website provides information about Room 801, including game guides, gameplay details, download information, and related content.
          </p>

          <p>
            You should use the information on this website responsibly. Room801apk.com is not responsible for problems that may result from the use of third-party files, links, or services.
          </p>

          <p>
            The content on this website is provided for informational purposes. We may update, change, or remove content when needed. If you do not agree with these terms, please stop using the website.
          </p>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}