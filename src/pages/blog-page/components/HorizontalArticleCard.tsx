import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants/routes';

interface HorizontalArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const HorizontalArticleCard: React.FC<HorizontalArticleCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  imageUrl,
}) => {
  return (
    <Link
      to={PATH.BLOG_DETAIL.replace(':slug', slugify(title))}
      className="block bg-[#101212] rounded-2xl border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group"
    >
      <div className="flex flex-col sm:flex-row p-4 sm:p-6">
        {/* Image Section */}
        <div className="w-full sm:w-44 h-48 sm:h-28 flex-shrink-0 relative overflow-hidden rounded-2xl mb-4 sm:mb-0">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 sm:pl-6 flex flex-col justify-between">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-200 line-clamp-2 sm:line-clamp-none">
            {title}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span className="hidden xs:inline">{date}</span>
              <span className="xs:hidden">{date.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3 hidden sm:block">
            {excerpt}
          </p>

          {/* Read More Link */}
          <span className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors duration-200 flex items-center gap-2 group/link self-start">
            Read more
            <ArrowRight
              size={16}
              className="group-hover/link:translate-x-1 transition-transform duration-200"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalArticleCard;
