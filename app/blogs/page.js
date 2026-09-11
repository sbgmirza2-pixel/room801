import { blogsData } from '@/data/blogs';
import BlogListClient from './BlogListClient';
import Navbar from '../components/Navbar';
import Room801Footer from '../components/Room801Footer';

export const metadata = {
  title: "Room 801 Guides & Blog - Master All Anomalies",
  description: "Explore official Room 801 guides, walkthroughs, anomalies list, and ending explanations.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#202328] text-[#E8E9E7] font-sans flex flex-col">
      <Navbar />
      
      {/* Balanced explicit spacer to prevent navbar overlap */}
      <div className="h-20 sm:h-24 w-full"></div>

      <main className="grow w-full pb-16">
        <BlogListClient blogs={blogsData} />
      </main>

      <Room801Footer />
    </div>
  );
}