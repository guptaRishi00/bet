import SearchFilters from './components/SearchFilters';
import MatchCard from './components/MatchCard';
import Newsletter from './components/Newsletter';

const ResultsPage = () => {
  const matchesData = [
    {
      date: 'Yesterday',
      matches: [
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
      ],
    },
    {
      date: '2 days ago',
      matches: [
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
      ],
    },
    {
      date: 'April 8, 2025',
      matches: [
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
      ],
    },
    {
      date: 'April 7, 2025',
      matches: [
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
        {
          homeTeam: 'Arsenal',
          awayTeam: 'Chelsea',
          score: '2 - 2',
          league: 'England Premiere League',
          prediction: 'BTTS & Over 2.5',
          tipster: 'Alex Thompson',
          odds: '1.95',
          isWin: true,
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#101212] to-[#3B3E40]">
      <SearchFilters />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {matchesData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h2 className="text-white text-lg font-medium mb-4">{section.date}</h2>
              <div className="space-y-3">
                {section.matches.map((match, matchIndex) => (
                  <MatchCard key={`${sectionIndex}-${matchIndex}`} {...match} />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#61F308] to-[#15B54B] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium">
              Load More Results
            </button>
          </div>
        </div>
      </main>

      <Newsletter />
    </div>
  );
};

export default ResultsPage;
