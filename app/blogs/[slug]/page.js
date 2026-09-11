import { blogsData } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Room801Footer from '../../components/Room801Footer';

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Guide Not Found - Room 801" };
  }

  return {
    title: `${blog.title} | Room 801`,
    description: blog.metaDescription,
  };
}

function formatBlogContent(content) {
  if (!content) return '';
  return content
    .split('\n\n')
    .map((paragraph) => {
      const parsedText = paragraph.replace(
        /\*\*(.*?)\*\*/g,
        '<span class="flex items-center gap-2 mt-6 mb-2 text-xl font-display text-[#E8E9E7] font-semibold"><span class="w-2 h-2 rounded-full bg-[#A9433E] inline-block shrink-0"></span><span>$1</span></span>'
      );
      return `<p class="mb-5 leading-relaxed font-sans">${parsedText.replace(/\n/g, '<br />')}</p>`;
    })
    .join('');
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const formattedContent = formatBlogContent(blog.content);

  // Helper function to color the first word red in the detail page main title
  const renderTitleWithRedFirstWord = (titleText) => {
    const words = titleText.split(' ');
    if (words.length === 0) return titleText;
    const firstWord = words[0];
    const remainingWords = words.slice(1).join(' ');
    return (
      <>
        <span className="text-[#A9433E]">{firstWord}</span> {remainingWords}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#202328] text-[#E8E9E7] font-sans flex flex-col">
      <Navbar />
      
      {/* Balanced explicit spacer to prevent navbar overlap */}
      <div className="h-20 sm:h-24 w-full"></div>

      <main className="grow relative py-16 px-4 bg-[#1a1c23] overflow-hidden text-[#E8E9E7] font-sans w-full">
        {/* Background Smoky Glows */}
        <div className="absolute inset-0 pointer-events-none z-0 blur-[80px] opacity-40">
          <div className="absolute w-[450px] h-[450px] rounded-full mix-blend-screen bg-[rgba(169,67,62,0.35)] top-[10%] left-[10%] animate-pulse"></div>
          <div className="absolute w-[450px] h-[450px] rounded-full mix-blend-screen bg-[rgba(75,85,99,0.35)] bottom-[10%] right-[10%] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center text-[#a9b0ba] hover:text-[#A9433E] transition-colors font-medium text-sm"
            >
              &larr; Back to Guides & Blog
            </Link>
          </div>

          <article className="bg-[rgba(37,40,48,0.85)] backdrop-blur-md border border-[rgba(89,97,109,0.3)] rounded-2xl p-6 sm:p-10 shadow-2xl">
            <header className="mb-8 pb-6 border-b border-[rgba(89,97,109,0.3)]">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#E8E9E7] leading-tight font-display">
                {renderTitleWithRedFirstWord(blog.title)}
              </h1>
            </header>

            <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-xl mb-8 border border-[rgba(89,97,109,0.2)] bg-[rgba(26,28,35,0.6)]">
              <img
                src="/blog.png"
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="text-[#d1d5db] text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </article>
        </div>
      </main>

      <Room801Footer />
    </div>
  );
}