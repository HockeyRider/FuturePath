'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-500">
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
              <button className="duolingo-button duolingo-button-orange px-6 py-3 text-lg font-black">
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
            <span className="text-orange-300">Dream Career!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-bold max-w-2xl mx-auto">
            Discover college majors and career paths through fun quizzes, 
            chat with our AI coach, and explore real opportunities!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/dashboard">
              <button className="duolingo-button duolingo-button-blue px-12 py-4 text-xl font-black text-lg">
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
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

      {/* How It Works Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              Three simple steps to your dream career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: '📝',
                title: 'Take Quizzes',
                description: 'Answer fun questions about your interests and personality.'
              },
              {
                step: '2',
                icon: '🔍',
                title: 'Explore Careers',
                description: 'Discover careers that match your unique profile perfectly.'
              },
              {
                step: '3',
                icon: '🎯',
                title: 'Take Action',
                description: 'Find colleges, internships, and opportunities to get started.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-white font-black">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              Real students, real results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                age: '17',
                emoji: '👩‍💻',
                career: 'Software Engineer',
                quote: 'Found my passion for coding through the quizzes!'
              },
              {
                name: 'Marcus J.',
                age: '16',
                emoji: '👨‍⚕️',
                career: 'Pre-Med',
                quote: 'The AI coach helped me understand medical careers.'
              },
              {
                name: 'Emma L.',
                age: '18',
                emoji: '👩‍🎨',
                career: 'UX Designer',
                quote: 'Discovered design through the personality assessment.'
              }
            ].map((story, index) => (
              <div key={index} className="duolingo-card p-6 text-center">
                <div className="text-5xl mb-4">{story.emoji}</div>
                <h3 className="text-xl font-black text-gray-800 mb-1">{story.name}</h3>
                <p className="text-sm font-bold text-gray-500 mb-3">Age {story.age} • {story.career}</p>
                <p className="text-gray-700 font-semibold italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Careers */}
      <section className="px-4 py-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Popular Careers
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              Explore trending career paths
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: '💻', name: 'Software Dev', growth: '+22%' },
              { icon: '👩‍⚕️', name: 'Healthcare', growth: '+15%' },
              { icon: '🎨', name: 'Design', growth: '+13%' },
              { icon: '📊', name: 'Data Science', growth: '+31%' },
              { icon: '🎬', name: 'Media', growth: '+8%' },
              { icon: '🌱', name: 'Sustainability', growth: '+25%' }
            ].map((career, index) => (
              <div key={index} className="duolingo-card p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl mb-2">{career.icon}</div>
                <h4 className="font-black text-gray-800 text-sm mb-1">{career.name}</h4>
                <p className="text-xs font-bold text-green-600">{career.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Why Choose Pathfinder?
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              We make career discovery fun and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎮',
                title: 'Gamified',
                description: 'Earn XP and unlock achievements as you explore.'
              },
              {
                icon: '🤖',
                title: 'AI-Powered',
                description: 'Smart recommendations based on your unique profile.'
              },
              {
                icon: '📱',
                title: 'Mobile-First',
                description: 'Learn anywhere, anytime on any device.'
              },
              {
                icon: '🆓',
                title: 'Free Forever',
                description: 'All core features are completely free to use.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 font-semibold text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-400 to-orange-400">
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
            <button className="duolingo-button duolingo-button-white px-12 py-4 text-xl font-black text-blue-600">
              START FOR FREE
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-lg">
                  🎯
                </div>
                <span className="text-xl font-black text-white">Pathfinder</span>
              </div>
              <p className="text-gray-400 font-semibold text-sm">
                Helping teens discover their perfect career path through fun, interactive tools.
              </p>
            </div>
            <div>
              <h4 className="text-white font-black mb-3">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Career Quizzes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">AI Coach</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">College Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Opportunities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Career Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">College Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 font-semibold text-sm mb-4 md:mb-0">
              © 2024 Pathfinder. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">📧</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">📱</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">🐦</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}