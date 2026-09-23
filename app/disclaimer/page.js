import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer - Room 801 APK',
  description: 'Read the disclaimer for information about third-party APK files, external links, game content, and website responsibility.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#202328] text-[#E8E9E7] font-sans flex flex-col">
      <Navbar />

      {/* Spacer to prevent navbar overlap */}
      <div className="h-20 sm:h-24 w-full"></div>

      <main
        className="grow site-container max-w-4xl mx-auto pb-16 w-full"
        style={{
          paddingLeft: '4rem',
          paddingRight: '10rem',
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-display text-[#E8E9E7]">
          Disclaimer
        </h1>

        <div className="space-y-6 text-[#a9b0ba] text-base leading-relaxed">
          <p>
            The information available on{' '}
            <Link 
              href="/" 
              className="text-[#A9433E] font-semibold hover:underline"
            >
              room801apk
            </Link>
             is provided for general informational purposes. We publish guides,
            game information, download details, and other content related to
            Room 801.
          </p>

          <p>
            <Link 
              href="/" 
              className="text-[#A9433E] font-semibold hover:underline"
            >
              room801.com
            </Link>
             is an independent website and is not the official
            website of the Room 801 game or its developer unless clearly
            stated on a specific page.
          </p>

          <p>
            Some information may come from third-party sources and may change
            over time. Users should check files and links before using them. We
            are not responsible for problems caused by third-party websites,
            files, or services.
          </p>

          <p>
            If you find incorrect information on our website, please contact us
            so we can review it.
          </p>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}