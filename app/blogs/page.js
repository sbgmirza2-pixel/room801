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
    <>
      <Navbar />
      <BlogListClient blogs={blogsData} />
      <Room801Footer />
    </>
  );
}