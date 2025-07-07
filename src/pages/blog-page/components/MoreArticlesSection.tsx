import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants/routes';

interface MoreArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const MoreArticlesSection: React.FC = () => {
  const moreArticles: MoreArticle[] = [
    {
      id: 1,
      title: '5 Advanced Betting Strategies for Football',
      excerpt:
        'Learn how professional bettors analyze matches and make profitable decisions with these advanced strategies.',
      category: 'Strategies',
      readTime: '8 min read',
      date: '2 days ago',
      imageUrl:
        'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Understanding Expected Goals (xG) in Football Betting',
      excerpt:
        'How to use xG data to make more informed betting decisions and find value in the markets.',
      category: 'Analytics',
      readTime: '10 min read',
      date: 'Apr 5, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'The Psychology of Sports Betting: Avoiding Common Pitfalls',
      excerpt:
        'Explore the psychological aspects of betting and learn techniques to maintain discipline.',
      category: 'Psychology',
      readTime: '7 min read',
      date: 'Mar 26, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className=" py-16 px-4">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">More Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {moreArticles.map((article) => (
            <Link
              key={article.id}
              to={PATH.BLOG_DETAIL.replace(':slug', slugify(article.title))}
              className="bg-[#101212] rounded-2xl overflow-hidden border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-gray-900/80 rounded-full border border-green-500/30">
                    {article.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 text-xs text-gray-300 bg-gray-900/80 px-2 py-1 rounded-full">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>

                  <span className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors duration-200 flex items-center gap-1 group/link">
                    Read more
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform duration-200"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            View all Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreArticlesSection;
