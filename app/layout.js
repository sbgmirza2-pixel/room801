import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
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
  title: "Room 801 APK - Game Info & Download",
  description:
    "Room 801 APK game information, guides, gameplay details, downloads, and useful tips.",
  metadataBase: new URL("https://room801apk.com"),
  openGraph: {
    title: "Room 801 APK - Game Info & Download",
    description:
      "Room 801 APK game information, guides, gameplay details, downloads, and useful tips.",
    url: "https://room801apk.com",
    siteName: "Room 801 APK",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Room 801 APK Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Room 801 APK - Game Info & Download",
    description:
      "Room 801 APK game information, guides, gameplay details, downloads, and useful tips.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}