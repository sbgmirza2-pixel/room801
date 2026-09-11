import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';

export const metadata = {
  title: 'Privacy Policy - Room 801 APK',
  description: 'Read the Privacy Policy to learn how visitor information, cookies, and website data are collected, used, and handled.',
};

export default function PrivacyPolicyPage() {
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
          Privacy <span className="text-[#A9433E]">Policy</span>
        </h1>

        <div className="space-y-6 text-[#a9b0ba] text-base leading-relaxed">
          <p>
            At{' '}
            <strong className="text-[#E8E9E7]">Room801apk.com</strong>, we
            respect the privacy of our visitors. This Privacy Policy explains
            what type of information may be collected when you visit our
            website and how that information may be used.
          </p>

          <p>
            Like many websites, we may use basic technical information and
            cookies to understand website traffic and improve the user
            experience. Some third-party services, including advertising
            services, may also use cookies or similar technologies.
          </p>

          <p>
            We do not ask visitors to provide personal information unless it is
            needed for a specific purpose, such as contacting us. If you have
            questions about this Privacy Policy, please contact us through our
            Contact Us page.
          </p>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}