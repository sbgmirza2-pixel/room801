import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';
import Link from 'next/link';

export const metadata = {
  title: 'DMCA Notice & Policy - Room 801 APK',
  description: 'Learn how to report copyright concerns, request content removal, or submit a DMCA notice for Room 801 related content.',
};

export default function DmcaPage() {
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
          DMCA
        </h1>

        <div className="space-y-6 text-[#a9b0ba] text-base leading-relaxed">
          <p>
            <Link 
              href="/" 
              className="text-[#A9433E] font-semibold hover:underline"
            >
              room{' '}801 
            </Link>
             {' '} respects
            the rights of copyright owners. If you believe that any content
            published on our website violates your copyright, you can contact
            us with the relevant details.
          </p>

          <p>
            Please include the name of the copyrighted work, the page or
            content you are referring to, and enough information to help us
            understand your claim.
          </p>

          <p>
            After receiving a valid copyright complaint, we will review the
            reported content and take appropriate action where necessary.
          </p>

          <p>
            For copyright-related requests, please contact us through the email
            address listed on our website.
          </p>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}