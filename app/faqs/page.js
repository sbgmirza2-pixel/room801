import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';
import Room801FAQs from '../components/Room801FAQs';

const SITE_URL = 'https://room801apk.com';

export const metadata = {
  title: 'Frequently Asked Questions - Room 801 APK',
  description: 'Download Room 801 APK for Android and explore its looping hallway, strange anomalies, atmospheric sounds, simple controls, and suspenseful gameplay.',
  alternates: {
    canonical: `${SITE_URL}/faqs`,
  },
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#202328] text-[#E8E9E7] font-sans flex flex-col">
      <Navbar />

      {/* Spacer to prevent navbar overlap */}
      <div className="h-20 sm:h-24 w-full"></div>

      <main className="grow site-container max-w-4xl mx-auto pb-16 w-full px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-display text-[#E8E9E7] text-center">
          Frequently Asked <span className="text-[#A9433E]">Questions</span>
        </h1>
        
        <Room801FAQs />
      </main>

      <Room801Footer />
    </div>
  );
}