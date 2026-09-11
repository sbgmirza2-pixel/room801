'use client';

import Link from 'next/link';

export default function BlogListClient({ blogs = [] }) {
  return (
    <main className="blog-list-page font-sans">
      {/* Background Smoky Glows */}
      <div className="smoke-bg-container">
        <div className="smoke-blob smoke-blob-1"></div>
        <div className="smoke-blob smoke-blob-2"></div>
      </div>

      <div className="container">
        <div className="header-section">
          <h1 className="main-title font-display">
            <span className="text-[#A9433E]">Room</span> 801 Guides & Blog
          </h1>
          <p className="subtitle">Master the hallways, spot every anomaly, and discover all endings.</p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="blog-card-link">
              <div className="blog-card">
                <div className="card-image-container">
                  <img 
                    src="/blog.png" 
                    alt={blog.title} 
                    className="card-image"
                  />
                </div>
                
                <div className="card-content">
                  <h2 className="card-title font-display">{blog.title}</h2>
                  <p className="card-excerpt">{blog.metaDescription}</p>
                  <span className="read-more">Read Guide &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-list-page {
          position: relative;
          min-height: 100vh;
          padding: 60px 0 100px;
          background: #1a1c23;
          overflow: hidden;
        }
        .smoke-bg-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          filter: blur(80px);
          opacity: 0.4;
        }
        .smoke-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          mix-blend-mode: screen;
          animation: smokeFloat 14s ease-in-out infinite alternate;
        }
        .smoke-blob-1 {
          background: rgba(169, 67, 62, 0.35);
          top: 10%;
          left: 10%;
        }
        .smoke-blob-2 {
          background: rgba(75, 85, 99, 0.35);
          bottom: 10%;
          right: 10%;
          animation-delay: -7s;
          animation-direction: alternate-reverse;
        }
        @keyframes smokeFloat {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, 40px) scale(1.15); }
          100% { transform: translate(-30px, 50px) scale(0.95); }
        }
        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .header-section {
          text-align: center;
          margin-bottom: 50px;
        }
        .main-title {
          font-size: 3rem;
          font-weight: 800;
          color: #E8E9E7;
          margin-bottom: 15px;
        }
        .subtitle {
          font-size: 1.1rem;
          color: #a9b0ba;
        }
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        .blog-card-link {
          text-decoration: none;
        }
        .blog-card {
          background: rgba(37, 40, 48, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(89, 97, 109, 0.3);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          border-color: #A9433E;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(169, 67, 62, 0.15);
        }
        .card-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: rgba(26, 28, 35, 0.5);
          border-bottom: 1px solid rgba(89, 97, 109, 0.2);
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .blog-card:hover .card-image {
          transform: scale(1.05);
        }
        .card-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #E8E9E7;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .card-excerpt {
          color: #a9b0ba;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .read-more {
          color: #A9433E;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .blog-card:hover .read-more {
          color: #bd4a44;
        }
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.2rem;
          }
          .blogs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}