'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-500">
      {/* Header */}
      <header className="px-4 py-6">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
              🎯
            </div>
            <span className="text-2xl font-black text-white">Pathfinder</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white font-bold hover:underline hidden md:block">
              ABOUT
            </button>
            <button className="text-white font-bold hover:underline hidden md:block">
              CONTACT
            </button>
            <Link href="/dashboard">
              <button className="duolingo-button duolingo-button-blue px-6 py-3 text-lg font-black">
                GET STARTED
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Mascot */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center text-6xl mascot-bounce duolingo-shadow">
              🚀
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Find Your
            <br />
            <span className="text-yellow-300">Dream Career!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-bold max-w-2xl mx-auto">
            Discover college majors and career paths through fun quizzes, 
            chat with our AI coach, and explore real opportunities!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/dashboard">
              <button className="duolingo-button duolingo-button-green px-12 py-4 text-xl font-black text-lg">
                START LEARNING
              </button>
            </Link>
            <button className="duolingo-button duolingo-button-white px-12 py-4 text-xl font-black">
              WATCH DEMO
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '👥', value: '50K+', label: 'Students' },
              { icon: '⭐', value: '4.9', label: 'Rating' },
              { icon: '🏆', value: '200+', label: 'Careers' },
              { icon: '📈', value: '95%', label: 'Success' }
            ].map((stat, index) => (
              <div key={index} className="duolingo-card stat-card p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-gray-800">{stat.value}</div>
                <div className="text-sm font-bold text-gray-600 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 wiggle-on-hover">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              Fun, interactive tools to discover your perfect career path
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'assessments',
                icon: '🧠',
                title: 'Career Quizzes',
                description: 'Fun personality tests to discover your interests',
                color: 'bg-purple-100',
                href: '/assessment'
              },
              {
                id: 'chat',
                icon: '🤖',
                title: 'AI Coach',
                description: 'Chat with our smart career assistant anytime',
                color: 'bg-blue-100',
                href: '/chat'
              },
              {
                id: 'opportunities',
                icon: '💼',
                title: 'Real Jobs',
                description: 'Find internships and research projects near you',
                color: 'bg-green-100',
                href: '/opportunities'
              },
              {
                id: 'colleges',
                icon: '🎓',
                title: 'College Guide',
                description: 'Explore schools and majors that fit your goals',
                color: 'bg-orange-100',
                href: '/colleges'
              }
            ].map((feature) => (
              <Link key={feature.id} href={feature.href}>
                <div 
                  className={`duolingo-card interactive-hover p-8 cursor-pointer ${
                    isHovered === feature.id ? '-translate-y-2' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(feature.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl float-animation`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-800 mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-semibold text-center text-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-400 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-4xl mb-8 mascot-bounce cursor-pointer">
            🎉
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Start?
          </h3>
          <p className="text-xl text-white/90 mb-8 font-bold">
            Join thousands of teens discovering their dream careers!
          </p>
          <Link href="/dashboard">
            <button className="duolingo-button duolingo-button-green px-12 py-4 text-xl font-black">
              START FOR FREE
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-lg">
              🎯
            </div>
            <span className="text-xl font-black text-white">Pathfinder</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400 font-bold">
            <span className="nav-item hover:text-white cursor-pointer">PRIVACY</span>
            <span className="nav-item hover:text-white cursor-pointer">TERMS</span>
            <span className="nav-item hover:text-white cursor-pointer">CONTACT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}