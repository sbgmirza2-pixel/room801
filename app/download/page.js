import DownloadClient from './DownloadClient';

const SITE_URL = 'https://room801apk.com';
export const metadata = {
  title: "Download Room 801 APK for Android",
  description: "Download Room 801 APK for Android with simple download and install steps, game details, tips, and everything you need before starting the game.",
 alternates: {
    canonical: `${SITE_URL}/download`,
  },
};

export default function DownloadPage() {
  return <DownloadClient />;
}