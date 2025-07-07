import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import MoreArticlesSection from '../blog-page/components/MoreArticlesSection';
import Newsletter from '../result-page/components/Newsletter';
import { Footer } from '@/customComponents/Footer';
import { TopbarHeader } from '@/components';

const BlogDetail = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#101212] to-[#3B3E40]">
      <TopbarHeader/>
      {/* Navigation Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="w-full mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <span>Blog</span>
            <span>{'>'}</span>
            <span className="text-white">5 Advanced Betting Strategies for Football</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img
            src="/lovable-uploads/7ab7a326-c444-474e-949f-c4d8d38560aa.png"
            alt="Advanced Betting Strategies"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>2 days ago</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>Michael Johnson</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            5 Advanced Betting Strategies for Football
          </h1>

          <div className="flex items-center justify-between">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-500/10 rounded-full border border-green-500/20">
              Strategies
            </span>
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            This comprehensive guide explores advanced betting strategies that professional bettors
            use to maximize their profits. From value betting strategies to advanced statistical
            analysis, you'll learn data-driven insights. Discover sports bet mathematics,
            probability sports bets results, win rate optimization, bookmaker bias analysis,
            expected sports betting patterns, and portfolio diversification for profitable betting.
            Follow trending statistics analysis, sports arbitrage opportunities, and data-driven
            sports betting to take your strategy to the next level.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">
            Betting Strategy Performance Analysis
          </h2>

          <p className="text-gray-300 mb-6">
            Here are the key metrics for tracking trend patterns they use in-segment player metrics.
          </p>

          {/* Chart Placeholder */}
          <div className="bg-gray-900 p-6 rounded-xl mb-8 border border-gray-800">
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Performance Chart Visualization</span>
            </div>
            <p className="text-gray-400 text-sm">
              Chart showing betting strategy performance over time with trend analysis
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Key Performance Indicators</h3>

          <ul className="text-gray-300 space-y-2 mb-6">
            <li>• A significant value representing expected overall bet return</li>
            <li>
              • Data that provides better predictions through game analysis and player statistics
              helps you get the real edge value tips. But it's important to balance all day and
              evening sessions to maintain profitability
            </li>
            <li>• Track performance and betting analysis using diverse variables and metrics</li>
            <li>
              • Improve results based on machine sport analysis using bet management and predictive
              analysis
            </li>
            <li>
              • Account growth by new strategy to manage future expected risks that are in-segment
              player metrics
            </li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-4">Advanced Strategy Analysis</h3>

          <p className="text-gray-300 mb-6">
            Managing diverse sports predictions through statistical data, risk management, and
            professional analysis. Sports betting analysis requires a deep dive set at data-driven
            approaches that provide sports betting results based analytics and performance tracking
            with professional sports betting insights.
          </p>

          {/* Performance Table */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 mb-8">
            <div className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Strategy Performance Comparison
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-300 font-medium">Strategy</th>
                      <th className="text-right py-3 text-gray-300 font-medium">Win Rate</th>
                      <th className="text-right py-3 text-gray-300 font-medium">ROI</th>
                      <th className="text-right py-3 text-gray-300 font-medium">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Value Betting</td>
                      <td className="text-right py-3">68.5%</td>
                      <td className="text-right py-3 text-green-400">+12.8%</td>
                      <td className="text-right py-3">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Asian Handicap</td>
                      <td className="text-right py-3">64.2%</td>
                      <td className="text-right py-3 text-green-400">+9.5%</td>
                      <td className="text-right py-3">Low</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Over/Under 2.5</td>
                      <td className="text-right py-3">59.8%</td>
                      <td className="text-right py-3 text-green-400">+7.2%</td>
                      <td className="text-right py-3">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Correct Score</td>
                      <td className="text-right py-3">28.4%</td>
                      <td className="text-right py-3 text-green-400">+15.6%</td>
                      <td className="text-right py-3">High</td>
                    </tr>
                    <tr>
                      <td className="py-3">Draw Betting</td>
                      <td className="text-right py-3">31.7%</td>
                      <td className="text-right py-3 text-green-400">+8.9%</td>
                      <td className="text-right py-3">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Implementation Guidelines</h3>

          <div className="space-y-4 text-gray-300">
            <p>
              • <strong className="text-white">Value betting strategy:</strong> Focus on identifying
              bets where the odds offered by bookmakers are higher than the actual probability of
              the outcome occurring.
            </p>
            <p>
              • <strong className="text-white">Asian Handicap approach:</strong> Utilize Asian
              handicap markets to eliminate the draw option and create more balanced betting
              opportunities.
            </p>
            <p>
              • <strong className="text-white">Statistical modeling:</strong> Develop your own
              statistical models using historical data, team performance metrics, and player
              statistics.
            </p>
            <p>
              • <strong className="text-white">Bankroll management:</strong> Never bet more than
              2-5% of your total bankroll on a single bet, regardless of confidence level.
            </p>
            <p>
              • <strong className="text-white">Market timing:</strong> Place bets at optimal times
              when the market inefficiencies are most pronounced.
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mt-8">
            <h4 className="text-lg font-semibold text-green-400 mb-3">Key Takeaway</h4>
            <p className="text-gray-300">
              Success in football betting requires a combination of statistical analysis,
              disciplined bankroll management, and continuous learning. Focus on long-term
              profitability rather than short-term gains, and always bet responsibly.
            </p>
          </div>
        </div>
      </div>
      <MoreArticlesSection/>  
      <div className="px-8">
      <Newsletter/>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogDetail;
