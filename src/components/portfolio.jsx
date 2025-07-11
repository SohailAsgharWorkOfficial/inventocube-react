import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Logo Design');

  const categories = ['Logo Design', 'Branding', 'Web Design', 'Mobile App', 'NFT'];
  
  const portfolioItems = [
    // Logo Design (12 images)
    { id: 1, category: 'Logo Design', image: 'pic1', title: 'Logo 1', bgColor: 'bg-gray-800' },
    { id: 2, category: 'Logo Design', image: 'pic2', title: 'Logo 2', bgColor: 'bg-gray-400' },
    { id: 3, category: 'Logo Design', image: 'pic3', title: 'Logo 3', bgColor: 'bg-yellow-400' },
    { id: 4, category: 'Logo Design', image: 'pic4', title: 'Logo 4', bgColor: 'bg-pink-100' },
    { id: 5, category: 'Logo Design', image: 'pic5', title: 'Logo 5', bgColor: 'bg-orange-400' },
    { id: 6, category: 'Logo Design', image: 'pic6', title: 'Logo 6', bgColor: 'bg-red-600' },
    { id: 7, category: 'Logo Design', image: 'pic7', title: 'Logo 7', bgColor: 'bg-purple-600' },
    { id: 8, category: 'Logo Design', image: 'pic8', title: 'Logo 8', bgColor: 'bg-blue-600' },
    { id: 9, category: 'Logo Design', image: 'pic9', title: 'Logo 9', bgColor: 'bg-green-600' },
    { id: 10, category: 'Logo Design', image: 'pic10', title: 'Logo 10', bgColor: 'bg-indigo-600' },
    { id: 11, category: 'Logo Design', image: 'pic11', title: 'Logo 11', bgColor: 'bg-pink-600' },
    { id: 12, category: 'Logo Design', image: 'pic12', title: 'Logo 12', bgColor: 'bg-teal-600' },
    
    // Branding (12 images)
    { id: 13, category: 'Branding', image: 'pic13', title: 'Brand 1', bgColor: 'bg-slate-700' },
    { id: 14, category: 'Branding', image: 'pic14', title: 'Brand 2', bgColor: 'bg-rose-500' },
    { id: 15, category: 'Branding', image: 'pic15', title: 'Brand 3', bgColor: 'bg-amber-500' },
    { id: 16, category: 'Branding', image: 'pic16', title: 'Brand 4', bgColor: 'bg-lime-500' },
    { id: 17, category: 'Branding', image: 'pic17', title: 'Brand 5', bgColor: 'bg-emerald-500' },
    { id: 18, category: 'Branding', image: 'pic18', title: 'Brand 6', bgColor: 'bg-cyan-500' },
    { id: 19, category: 'Branding', image: 'pic19', title: 'Brand 7', bgColor: 'bg-sky-500' },
    
    
    // Web Design (12 images)
    { id: 25, category: 'Web Design', image: 'pic25', title: 'Web 1', bgColor: 'bg-gray-600' },
    { id: 26, category: 'Web Design', image: 'pic26', title: 'Web 2', bgColor: 'bg-yellow-500' },
    { id: 27, category: 'Web Design', image: 'pic27', title: 'Web 3', bgColor: 'bg-green-500' },
    { id: 28, category: 'Web Design', image: 'pic28', title: 'Web 4', bgColor: 'bg-blue-700' },
    { id: 31, category: 'Web Design', image: 'pic31', title: 'Web 7', bgColor: 'bg-indigo-500' },
    { id: 32, category: 'Web Design', image: 'pic32', title: 'Web 8', bgColor: 'bg-teal-500' },
    { id: 33, category: 'Web Design', image: 'pic33', title: 'Web 9', bgColor: 'bg-rose-600' },
    { id: 34, category: 'Web Design', image: 'pic34', title: 'Web 10', bgColor: 'bg-amber-600' },
    { id: 35, category: 'Web Design', image: 'pic35', title: 'Web 11', bgColor: 'bg-lime-600' },
    { id: 36, category: 'Web Design', image: 'pic36', title: 'Web 12', bgColor: 'bg-emerald-600' },
    
    // Mobile App (12 images)
    { id: 37, category: 'Mobile App', image: 'pic37', title: 'App 1', bgColor: 'bg-slate-600' },
    { id: 38, category: 'Mobile App', image: 'pic38', title: 'App 2', bgColor: 'bg-zinc-600' },
    { id: 39, category: 'Mobile App', image: 'pic39', title: 'App 3', bgColor: 'bg-stone-600' },
    { id: 40, category: 'Mobile App', image: 'pic40', title: 'App 4', bgColor: 'bg-red-400' },
    { id: 41, category: 'Mobile App', image: 'pic41', title: 'App 5', bgColor: 'bg-orange-500' },
    { id: 42, category: 'Mobile App', image: 'pic42', title: 'App 6', bgColor: 'bg-yellow-600' },
    { id: 43, category: 'Mobile App', image: 'pic43', title: 'App 7', bgColor: 'bg-green-400' },
    { id: 44, category: 'Mobile App', image: 'pic44', title: 'App 8', bgColor: 'bg-blue-400' },    
    { id: 48, category: 'Mobile App', image: 'pic48', title: 'App 12', bgColor: 'bg-rose-400' },
    
    // NFT (12 images)
    { id: 49, category: 'NFT', image: 'pic49', title: 'NFT 1', bgColor: 'bg-gradient-to-br from-purple-600 to-pink-600' },
    { id: 50, category: 'NFT', image: 'pic50', title: 'NFT 2', bgColor: 'bg-gradient-to-br from-blue-600 to-cyan-600' },
    { id: 51, category: 'NFT', image: 'pic51', title: 'NFT 3', bgColor: 'bg-gradient-to-br from-green-600 to-teal-600' },
    { id: 52, category: 'NFT', image: 'pic52', title: 'NFT 4', bgColor: 'bg-gradient-to-br from-yellow-600 to-orange-600' },
    { id: 53, category: 'NFT', image: 'pic53', title: 'NFT 5', bgColor: 'bg-gradient-to-br from-red-600 to-rose-600' },
    { id: 54, category: 'NFT', image: 'pic54', title: 'NFT 6', bgColor: 'bg-gradient-to-br from-indigo-600 to-purple-600' },
    { id: 55, category: 'NFT', image: 'pic55', title: 'NFT 7', bgColor: 'bg-gradient-to-br from-pink-600 to-fuchsia-600' },
    { id: 56, category: 'NFT', image: 'pic56', title: 'NFT 8', bgColor: 'bg-gradient-to-br from-cyan-600 to-blue-600' },
    { id: 57, category: 'NFT', image: 'pic57', title: 'NFT 9', bgColor: 'bg-gradient-to-br from-teal-600 to-green-600' },
    { id: 58, category: 'NFT', image: 'pic58', title: 'NFT 10', bgColor: 'bg-gradient-to-br from-orange-600 to-red-600' },
    { id: 59, category: 'NFT', image: 'pic59', title: 'NFT 11', bgColor: 'bg-gradient-to-br from-violet-600 to-purple-600' },
    { id: 60, category: 'NFT', image: 'pic60', title: 'NFT 12', bgColor: 'bg-gradient-to-br from-rose-600 to-pink-600' }
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#001245'}}>
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-blue-300 text-xs sm:text-sm font-medium tracking-wider mb-2 md:mb-4">PORTFOLIO</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-12 px-4">
            Take a Look at Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Award Winning
            </span>{' '}
            Portfolio
          </h1>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all duration-300 text-xs sm:text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-500/25'
                  : 'text-white border-gray-400 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-xl aspect-square flex items-center justify-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:bg-opacity-30 transition-all duration-300">
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white">{item.image}</span>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;