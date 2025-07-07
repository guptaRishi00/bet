import React from 'react';
import { Calendar, Clock, ThumbsUp, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants/routes';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  likes: number;
  comments: number;
  imageUrl: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const FeaturedBlog: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  likes,
  comments,
  imageUrl,
}) => {
  return (
    <Link
      to={PATH.BLOG_DETAIL.replace(':slug', slugify(title))}
      className="block w-full mx-auto bg-[#101212] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-green-500/10 hover:shadow-2xl group"
    >
      {/* Gradient Border Effect */}
      <div className="relative p-0.5 bg-gradient-to-r from-green-500 via-green-400 to-green-500 rounded-2xl">
        <div className="bg-[#101212] rounded-2xl">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Category Tag */}
            <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-500/10 rounded-full border border-green-500/20">
              {category}
            </span>

            {/* Title */}
            <h2 className="text-xl font-bold text-white leading-tight group-hover:text-green-400 transition-colors duration-200">
              {title}
            </h2>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{excerpt}</p>

            {/* Read More Link */}
            <div className="pt-2">
              <span className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors duration-200 flex items-center gap-1 group/link">
                Read more
                <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-700"
                />
                <span className="text-white font-medium text-sm">{author.name}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                {/* Likes */}
                <button className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors duration-200 group/like">
                  <ThumbsUp
                    size={16}
                    className="group-hover/like:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm font-medium">{likes}</span>
                </button>

                {/* Comments */}
                <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors duration-200 group/comment">
                  <MessageCircle
                    size={16}
                    className="group-hover/comment:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm font-medium">{comments}</span>
                </button>

                {/* Bookmark */}
                <button className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 group/bookmark">
                  <Bookmark
                    size={16}
                    className="group-hover/bookmark:scale-110 transition-transform duration-200"
                  />
                </button>

                {/* Share */}
                <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200 group/share">
                  <Share2
                    size={16}
                    className="group-hover/share:scale-110 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedBlog;
