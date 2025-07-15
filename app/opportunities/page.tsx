'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: 'internship' | 'research' | 'volunteer' | 'program';
  location: string;
  duration: string;
  deadline: string;
  description: string;
  tags: string[];
  saved: boolean;
  participants?: number;
  ageRange?: string;
  emoji: string;
}

export default function Opportunities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [savedOnly, setSavedOnly] = useState(false);

  const [opportunities, setOpportunities] = useState<Opportunity[]>([
    {
      id: '1',
      title: 'Summer Coding Bootcamp',
      organization: 'TechCorp',
      type: 'internship',
      location: 'San Francisco, CA',
      duration: '10 weeks',
      deadline: 'March 15, 2024',
      description: 'Learn to code and build real apps! Work with professional developers and create your own projects.',
      tags: ['Programming', 'Web Dev', 'React', 'Paid'],
      saved: true,
      participants: 20,
      ageRange: '16-18',
      emoji: '💻'
    },
    {
      id: '2',
      title: 'AI Research Helper',
      organization: 'University Lab',
      type: 'research',
      location: 'Boston, MA',
      duration: '8 weeks',
      deadline: 'April 1, 2024',
      description: 'Help scientists build the future of AI! Learn about machine learning and work on real research projects.',
      tags: ['AI', 'Machine Learning', 'Research', 'Academic Credit'],
      saved: false,
      participants: 15,
      ageRange: '17-18',
      emoji: '🤖'
    },
    {
      id: '3',
      title: 'Save the Planet Project',
      organization: 'Green Earth Initiative',
      type: 'volunteer',
      location: 'Portland, OR',
      duration: '6 weeks',
      deadline: 'May 20, 2024',
      description: 'Make a real difference! Plant trees, test water quality, and teach others about protecting our environment.',
      tags: ['Environment', 'Conservation', 'Community', 'Outdoor'],
      saved: false,
      participants: 50,
      ageRange: '14-18',
      emoji: '🌱'
    },
    {
      id: '4',
      title: 'Social Media Master Class',
      organization: 'Marketing Academy',
      type: 'program',
      location: 'Remote',
      duration: '4 weeks',
      deadline: 'March 30, 2024',
      description: 'Become a social media pro! Learn to create viral content, grow followers, and understand what makes people click.',
      tags: ['Marketing', 'Social Media', 'Remote', 'Certificate'],
      saved: true,
      participants: 100,
      ageRange: '15-18',
      emoji: '📱'
    },
    {
      id: '5',
      title: 'Future Doctor Experience',
      organization: 'City Hospital',
      type: 'program',
      location: 'Chicago, IL',
      duration: '2 weeks',
      deadline: 'June 1, 2024',
      description: 'See what doctors really do! Shadow real doctors, learn about different medical careers, and maybe save a life!',
      tags: ['Healthcare', 'Medicine', 'Shadowing', 'Career Exploration'],
      saved: false,
      participants: 30,
      ageRange: '16-18',
      emoji: '👩‍⚕️'
    },
    {
      id: '6',
      title: 'Game Creator Workshop',
      organization: 'Indie Game Studio',
      type: 'program',
      location: 'Austin, TX',
      duration: '3 weeks',
      deadline: 'April 15, 2024',
      description: 'Build your own video game! No experience needed - we\'ll teach you everything from coding to character design.',
      tags: ['Game Dev', 'Programming', 'Unity', 'Beginner Friendly'],
      saved: false,
      participants: 25,
      ageRange: '14-18',
      emoji: '🎮'
    }
  ]);

  const typeColors = {
    internship: 'bg-purple-100 text-purple-800 border-purple-300',
    research: 'bg-blue-100 text-blue-800 border-blue-300',
    volunteer: 'bg-green-100 text-green-800 border-green-300',
    program: 'bg-orange-100 text-orange-800 border-orange-300'
  };

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === 'all' || opp.type === selectedType;
    const matchesSaved = !savedOnly || opp.saved;
    
    return matchesSearch && matchesType && matchesSaved;
  });

  const toggleSaved = (id: string) => {
    setOpportunities(prev => 
      prev.map(opp => 
        opp.id === id ? { ...opp, saved: !opp.saved } : opp
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
            <span className="text-2xl">💼</span>
            <span className="text-xl font-black text-white">Opportunities</span>
          </div>
        </div>
      </header>

      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-4xl mb-4 mascot-bounce">
              🚀
            </div>
            <h1 className="text-4xl font-black text-white mb-2">
              Amazing Opportunities!
            </h1>
            <p className="text-white/90 font-bold text-lg">
              Find cool internships, research projects, and programs near you
            </p>
          </div>

          {/* Filters */}
          <div className="duolingo-card p-6 mb-8">
            <div className="grid lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Search for opportunities..."
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
                <option value="internship">Internships</option>
                <option value="research">Research</option>
                <option value="volunteer">Volunteer</option>
                <option value="program">Programs</option>
              </select>
              <button
                onClick={() => setSavedOnly(!savedOnly)}
                className={`duolingo-button font-black p-4 rounded-2xl ${
                  savedOnly ? 'duolingo-button-green' : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                {savedOnly ? '❤️ SAVED' : '🔖 SHOW SAVED'}
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-white font-bold text-lg text-center">
              Found {filteredOpportunities.length} awesome opportunities! 🎉
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="duolingo-card p-6 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl border-b-4 border-blue-300">
                      {opportunity.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-gray-800 text-xl mb-1">
                        {opportunity.title}
                      </h3>
                      <p className="text-gray-600 font-bold">{opportunity.organization}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSaved(opportunity.id)}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {opportunity.saved ? '❤️' : '🤍'}
                  </button>
                </div>

                <p className="text-gray-700 font-semibold mb-4 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="space-y-2 mb-4 text-sm font-bold text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⏰</span>
                    <span>{opportunity.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📅</span>
                    <span>Apply by {opportunity.deadline}</span>
                  </div>
                  {opportunity.participants && (
                    <div className="flex items-center space-x-2">
                      <span>👥</span>
                      <span>{opportunity.participants} spots • Ages {opportunity.ageRange}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-black border-2 ${typeColors[opportunity.type]}`}>
                    {opportunity.type.toUpperCase()}
                  </div>
                  {opportunity.tags.slice(0, 3).map((tag) => (
                    <div key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold border-2 border-gray-200">
                      {tag}
                    </div>
                  ))}
                  {opportunity.tags.length > 3 && (
                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold border-2 border-gray-200">
                      +{opportunity.tags.length - 3} more
                    </div>
                  )}
                </div>

                <button className="duolingo-button duolingo-button-blue w-full py-3 font-black">
                  LEARN MORE 🚀
                </button>
              </div>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="duolingo-card p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                😢
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-2">No opportunities found</h3>
              <p className="text-gray-600 font-bold">
                Try changing your search or filters to find more awesome opportunities!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}