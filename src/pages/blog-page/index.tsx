import { TopbarHeader } from '@/customComponents/TopbarHeader';
import FeaturedBlog from './components/FeaturedBlog';
import HorizontalArticleCard from './components/HorizontalArticleCard';
import MoreArticlesSection from './components/MoreArticlesSection';
import SearchFilters from './components/SearchFilters';
import Newsletter from './components/Newsletter';
import { Footer } from '@/customComponents/Footer';

const Blogpage = () => {
  const sampleArticle = {
    title: '5 Advanced Betting Strategies for Football',
    excerpt:
      'Learn how professional bettors analyze matches and make profitable decisions with these advanced strategies. Learn how professional bettors analyze matches and make profitable decisions with these advanced strategies.',
    author: {
      name: 'Michael Johnson',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    date: 'Today',
    readTime: '8 min read',
    category: 'Strategies',
    likes: 245,
    comments: 32,
    imageUrl:
      'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  const horizontalArticles = [
    {
      title: '5 Advanced Betting Strategies for Football',
      excerpt:
        'Learn how professional bettors analyze matches and make profitable decisions with these advanced strategies.',
      date: '2 days ago',
      readTime: '8 min read',
      imageUrl:
        'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Understanding Market Psychology in Trading',
      excerpt:
        'Discover the psychological factors that drive market movements and how to leverage them for better trading decisions.',
      date: '3 days ago',
      readTime: '6 min read',
      imageUrl:
        'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Risk Management Fundamentals for Beginners',
      excerpt:
        'Essential risk management principles every beginner should understand before starting their trading journey.',
      date: '5 days ago',
      readTime: '10 min read',
      imageUrl:
        'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Technical Analysis: Reading Chart Patterns',
      excerpt:
        'Master the art of reading chart patterns and technical indicators to make informed trading decisions.',
      date: '1 week ago',
      readTime: '12 min read',
      imageUrl:
        'https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#101212] to-[#3B3E40]">
      <TopbarHeader />
      <SearchFilters />
      <div className="w-full mx-auto py-12 px-4">
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Blog Section */}
          <div className="lg:w-1/2">
            <FeaturedBlog
              {...sampleArticle}
              title="Understanding Market Psychology in Trading"
              category="Psychology"
              likes={189}
              comments={24}
              author={{ ...sampleArticle.author, name: 'Sarah Chen' }}
            />
          </div>

          {/* Horizontal Articles Section */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              {horizontalArticles.map((article, index) => (
                <HorizontalArticleCard key={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <MoreArticlesSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blogpage;
