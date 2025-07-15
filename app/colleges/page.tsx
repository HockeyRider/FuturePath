'use client';

import { useState } from 'react';
import Link from 'next/link';

interface College {
  id: string;
  name: string;
  location: string;
  type: 'public' | 'private' | 'community';
  size: 'small' | 'medium' | 'large';
  tuition: string;
  acceptanceRate: string;
  rating: number;
  description: string;
  strongPrograms: string[];
  saved: boolean;
  enrollment: number;
  scholarships: boolean;
  emoji: string;
}

export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [savedOnly, setSavedOnly] = useState(false);

  const [colleges, setColleges] = useState<College[]>([
    {
      id: '1',
      name: 'Stanford University',
      location: 'Stanford, CA',
      type: 'private',
      size: 'medium',
      tuition: '$56,169/year',
      acceptanceRate: '4%',
      rating: 4.9,
      description: 'Super smart school in Silicon Valley! Famous for tech, engineering, and creating the next big startup.',
      strongPrograms: ['Computer Science', 'Engineering', 'Business', 'Medicine'],
      saved: true,
      enrollment: 17249,
      scholarships: true,
      emoji: '🌟'
    },
    {
      id: '2',
      name: 'UC Berkeley',
      location: 'Berkeley, CA',
      type: 'public',
      size: 'large',
      tuition: '$14,226/year (in-state)',
      acceptanceRate: '17%',
      rating: 4.7,
      description: 'Amazing public university with top programs and a vibrant campus culture. Go Bears! 🐻',
      strongPrograms: ['Engineering', 'Computer Science', 'Business', 'Environmental Science'],
      saved: false,
      enrollment: 45057,
      scholarships: true,
      emoji: '🐻'
    },
    {
      id: '3',
      name: 'Harvey Mudd College',
      location: 'Claremont, CA',
      type: 'private',
      size: 'small',
      tuition: '$58,359/year',
      acceptanceRate: '18%',
      rating: 4.6,
      description: 'Small but mighty! Perfect for future engineers and scientists who want close relationships with professors.',
      strongPrograms: ['Engineering', 'Computer Science', 'Physics', 'Mathematics'],
      saved: true,
      enrollment: 906,
      scholarships: true,
      emoji: '🔬'
    },
    {
      id: '4',
      name: 'Community College of Denver',
      location: 'Denver, CO',
      type: 'community',
      size: 'medium',
      tuition: '$4,542/year (in-state)',
      acceptanceRate: 'Open admission',
      rating: 4.2,
      description: 'Great place to start your college journey! Save money and get a solid foundation before transferring.',
      strongPrograms: ['Business', 'Healthcare', 'Engineering Transfer', 'Liberal Arts'],
      saved: false,
      enrollment: 9500,
      scholarships: true,
      emoji: '🏔️'
    },
    {
      id: '5',
      name: 'MIT',
      location: 'Cambridge, MA',
      type: 'private',
      size: 'medium',
      tuition: '$53,450/year',
      acceptanceRate: '7%',
      rating: 4.8,
      description: 'The ultimate tech school! Where future inventors, engineers, and Nobel Prize winners learn to change the world.',
      strongPrograms: ['Engineering', 'Computer Science', 'Physics', 'Mathematics'],
      saved: false,
      enrollment: 11934,
      scholarships: true,
      emoji: '🤖'
    },
    {
      id: '6',
      name: 'UT Austin',
      location: 'Austin, TX',
      type: 'public',
      size: 'large',
      tuition: '$11,448/year (in-state)',
      acceptanceRate: '32%',
      rating: 4.5,
      description: 'Hook \'em Horns! 🤘 Huge school with amazing programs, great sports, and the coolest city in Texas.',
      strongPrograms: ['Business', 'Engineering', 'Liberal Arts', 'Computer Science'],
      saved: false,
      enrollment: 51832,
      scholarships: true,
      emoji: '🤘'
    }
  ]);

  const typeColors = {
    public: 'bg-blue-100 text-blue-800 border-blue-300',
    private: 'bg-purple-100 text-purple-800 border-purple-300',
    community: 'bg-green-100 text-green-800 border-green-300'
  };

  const sizeLabels = {
    small: 'Small (<5,000)',
    medium: 'Medium (5,000-15,000)',
    large: 'Large (15,000+)'
  };

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         college.strongPrograms.some(program => program.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === 'all' || college.type === selectedType;
    const matchesSize = selectedSize === 'all' || college.size === selectedSize;
    const matchesSaved = !savedOnly || college.saved;
    
    return matchesSearch && matchesType && matchesSize && matchesSaved;
  });

  const toggleSaved = (id: string) => {
    setColleges(prev => 
      prev.map(college => 
        college.id === id ? { ...college, saved: !college.saved } : college
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-500">
      {/* Header */}
      <header className="px-4 py-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2 text-white font-bold">
            <span className="text-2xl">←</span>
            <span>BACK</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-black text-white">College Explorer</span>
          </div>
        </div>
      </header>

      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-4xl mb-4 mascot-bounce">
              🎓
            </div>
            <h1 className="text-4xl font-black text-white mb-2">
              Find Your Dream School!
            </h1>
            <p className="text-white/90 font-bold text-lg">
              Explore colleges that match your interests, goals, and budget
            </p>
          </div>

          {/* Filters */}
          <div className="duolingo-card p-6 mb-8">
            <div className="grid lg:grid-cols-4 gap-4 mb-4">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Search colleges, locations, or programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl font-bold focus:border-blue-500 focus:outline-none"
                />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="p-4 border-2 border-gray-200 rounded-2xl font-bold focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="community">Community</option>
              </select>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="p-4 border-2 border-gray-200 rounded-2xl font-bold focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All Sizes</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setSavedOnly(!savedOnly)}
                className={`duolingo-button font-black px-8 py-3 rounded-2xl ${
                  savedOnly ? 'duolingo-button-green' : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                {savedOnly ? '❤️ SAVED ONLY' : '🔖 SHOW SAVED'}
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-white font-bold text-lg text-center">
              Found {filteredColleges.length} amazing schools! 🎉
            </p>
          </div>

          {/* Colleges Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredColleges.map((college) => (
              <div key={college.id} className="duolingo-card p-6 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl border-b-4 border-blue-300">
                      {college.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-gray-800 text-xl mb-1">
                        {college.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span>📍</span>
                        <span className="text-gray-600 font-bold">{college.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSaved(college.id)}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {college.saved ? '❤️' : '🤍'}
                  </button>
                </div>

                <p className="text-gray-700 font-semibold mb-4 leading-relaxed">
                  {college.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-bold">
                  <div className="flex items-center space-x-2">
                    <span>💰</span>
                    <span className="text-gray-600">{college.tuition}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📈</span>
                    <span className="text-gray-600">{college.acceptanceRate} acceptance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>👥</span>
                    <span className="text-gray-600">{college.enrollment.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⭐</span>
                    <span className="text-gray-600">{college.rating}/5.0 rating</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-black border-2 ${typeColors[college.type]}`}>
                    {college.type.toUpperCase()}
                  </div>
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold border-2 border-gray-200">
                    {sizeLabels[college.size]}
                  </div>
                  {college.scholarships && (
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-black border-2 border-yellow-300">
                      💰 SCHOLARSHIPS
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-sm font-black text-gray-800 mb-2">🏆 STRONG PROGRAMS:</p>
                  <div className="flex flex-wrap gap-1">
                    {college.strongPrograms.slice(0, 4).map((program) => (
                      <div key={program} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-bold border border-blue-200">
                        {program}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="duolingo-button duolingo-button-blue w-full py-3 font-black">
                  LEARN MORE 🚀
                </button>
              </div>
            ))}
          </div>

          {filteredColleges.length === 0 && (
            <div className="duolingo-card p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                😢
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-2">No colleges found</h3>
              <p className="text-gray-600 font-bold">
                Try changing your search or filters to find more awesome schools!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}