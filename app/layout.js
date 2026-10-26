import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Download Room 801 APK for Android - Latest Version 2.3",
  description:
    "Download Room 801 APK for Android and explore its looping hallway, strange anomalies, atmospheric sounds, simple controls, and suspenseful gameplay.",
  verification: {
  google: "6iR0n-5o6r3WRj2a1YnE27VXL3-HkqYIrCgzt8UGAfw",
},
  metadataBase: new URL("https://room801apk.com"),
  openGraph: {
    title: "Download Room 801 APK for Android - Latest Version 2.3",
    description:
      "Explore the looping hallway, strange anomalies, and atmospheric sounds in Room 801 APK.",
    url: "https://room801apk.com",
    siteName: "Room 801 APK",
    images: [
      {
        url: "/room-801-apk-logo(1).webp",
        width: 1200,
        height: 630,
        alt: "Room 801 APK Gameplay Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Room 801 APK for Android - Latest Version 2.3",
    description:
      "Explore the looping hallway, strange anomalies, and atmospheric sounds in Room 801 APK.",
    images: ["/room-801-apk-logo(1).webp"],
  },
  alternates: {
    canonical: "https://room801apk.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <head>
      

      {/* Google AdSense Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-5227632355414460" />
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5227632355414460"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Other Head Script (if required) */}
        <script data-cfasync="false" async type="text/javascript" src="//aj.ariososhands.com/rkUDkiVA0rP7/156381"></script>
      </head>
      <body>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C81N04D42B"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C81N04D42B');
            `,
          }}
        />

        {children}

      </body>
    </html>
  );
}