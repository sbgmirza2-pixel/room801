import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';

export const metadata = {
  title: 'Contact Us - Room 801 APK',
  description: 'Contact us for questions, suggestions, corrections, feedback, or any other website-related matters. We are happy to hear from you.',
};

export default function ContactUsPage() {
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
          Contact <span className="text-[#A9433E]">Us</span>
        </h1>

        <div className="space-y-6 text-[#a9b0ba] text-base leading-relaxed">
          <p>
            If you have any questions about{' '}
            <strong className="text-[#E8E9E7]">Room801apk.com</strong>, feel
            free to contact us. You can also reach out if you notice an
            incorrect detail, have a suggestion, or want to report an issue
            with any page.
          </p>

          <p>
            We always appreciate useful feedback from our visitors. Please
            include enough information in your message so we can understand
            your request.
          </p>

          <p>
            For general questions, website feedback, content corrections, or
            other concerns, you can contact our team through the email address
            provided on this website.
          </p>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}