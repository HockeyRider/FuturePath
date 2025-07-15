'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalXP, setTotalXP] = useState(2450);
  const [completedLessons, setCompletedLessons] = useState(12);

  const lessons = [
    { id: 1, title: 'Interests Quiz', status: 'completed', xp: 50, icon: '💭' },
    { id: 2, title: 'Skills Assessment', status: 'completed', xp: 75, icon: '💪' },
    { id: 3, title: 'Values Explorer', status: 'completed', xp: 60, icon: '❤️' },
    { id: 4, title: 'Personality Test', status: 'current', xp: 80, icon: '🧠' },
    { id: 5, title: 'Career Matcher', status: 'locked', xp: 100, icon: '🎯' },
    { id: 6, title: 'College Prep', status: 'locked', xp: 90, icon: '🎓' },
  ];

  const achievements = [
    { icon: '🔥', title: 'Week Warrior', description: '7-day streak!', unlocked: true },
    { icon: '🧠', title: 'Quiz Master', description: 'Complete 5 assessments', unlocked: true },
    { icon: '⭐', title: 'Explorer', description: 'Try all features', unlocked: false },
    { icon: '🏆', title: 'Goal Getter', description: 'Set career goal', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-500">
      {/* Header */}
      <header className="px-4 py-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
              🎯
            </div>
            <span className="text-xl font-black text-white">Pathfinder</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Streak */}
            <div className="flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full cursor-pointer hover:bg-orange-600 transition-all duration-200">
              <span className="text-2xl streak-flame">🔥</span>
              <span className="text-white font-black">{currentStreak}</span>
            </div>
            
            {/* XP */}
            <div className="flex items-center space-x-2 bg-yellow-500 px-4 py-2 rounded-full cursor-pointer hover:bg-yellow-600 transition-all duration-200">
              <span className="text-xl">⚡</span>
              <span className="text-white font-black">{totalXP.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-4xl mb-4 mascot-bounce cursor-pointer">
              👋
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
              Welcome back, Alex!
            </h1>
            <p className="text-white/90 font-bold text-lg">
              Ready to continue your career journey?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Learning Path */}
            <div className="lg:col-span-2">
              <div className="duolingo-card p-8 mb-8">
                <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🗺️</span>
                  Your Learning Path
                </h2>
                
                <div className="space-y-6">
                  {lessons.map((lesson, index) => (
                    <div key={lesson.id} className="flex items-center space-x-4 group">
                      <div className={`lesson-circle ${lesson.status}`}>
                        {lesson.status === 'completed' ? '✓' : lesson.icon}
                      </div>
                      
                      <div className="flex-1 group-hover:transform group-hover:translateX-2 transition-all duration-200">
                        <h3 className="font-black text-gray-800 text-lg">{lesson.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-gray-600">
                            +{lesson.xp} XP
                          </span>
                          {lesson.status === 'completed' && (
                            <span className="text-green-500 text-sm font-bold">COMPLETED</span>
                          )}
                          {lesson.status === 'current' && (
                            <span className="text-blue-500 text-sm font-bold">IN PROGRESS</span>
                          )}
                        </div>
                      </div>
                      
                      {lesson.status !== 'locked' && (
                        <Link href={lesson.status === 'current' ? '/assessment' : '#'}>
                          <button className={`duolingo-button px-6 py-2 font-black ${
                            lesson.status === 'completed' 
                              ? 'duolingo-button-green' 
                              : 'duolingo-button-blue'
                          }`}>
                            {lesson.status === 'completed' ? 'REVIEW' : 'START'}
                          </button>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/chat">
                  <div className="duolingo-card interactive-hover p-6 cursor-pointer">
                    <div className="text-4xl mb-3">🤖</div>
                    <h3 className="font-black text-gray-800 text-lg mb-2">Chat with AI Coach</h3>
                    <p className="text-gray-600 font-semibold text-sm">
                      Ask questions about careers and get instant help!
                    </p>
                  </div>
                </Link>
                
                <Link href="/opportunities">
                  <div className="duolingo-card interactive-hover p-6 cursor-pointer relative overflow-hidden">
                    <div className="text-4xl mb-3">💼</div>
                    <h3 className="font-black text-gray-800 text-lg mb-2">Find Opportunities</h3>
                    <p className="text-gray-600 font-semibold text-sm">
                      Discover internships and research projects near you!
                    </p>
                    <div className="bg-red-500 text-white text-xs font-black px-2 py-1 rounded-full inline-block mt-2 animate-pulse">
                      5 NEW
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Stats */}
              <div className="duolingo-card p-6">
                <h3 className="font-black text-gray-800 text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-2">📊</span>
                  Your Progress
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-700 text-sm">LESSONS COMPLETED</span>
                      <span className="font-black text-gray-800">{completedLessons}/20</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div 
                        className="duolingo-progress h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(completedLessons / 20) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center stat-card p-2 rounded-xl">
                      <div className="text-2xl font-black text-blue-500">3</div>
                      <div className="text-xs font-bold text-gray-600 uppercase">Careers Found</div>
                    </div>
                    <div className="text-center stat-card p-2 rounded-xl">
                      <div className="text-2xl font-black text-purple-500">8</div>
                      <div className="text-xs font-bold text-gray-600 uppercase">Colleges Saved</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="duolingo-card p-6">
                <h3 className="font-black text-gray-800 text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  Achievements
                </h3>
                
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`achievement-card flex items-center space-x-3 p-3 rounded-xl ${
                      achievement.unlocked ? 'bg-green-50' : 'bg-gray-50'
                    }`}>
                      <div className={`text-2xl ${achievement.unlocked ? '' : 'grayscale'}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`font-bold text-sm ${
                          achievement.unlocked ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </div>
                        <div className="text-xs text-gray-600 font-semibold">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Challenge */}
              <div className="duolingo-card p-6 bg-gradient-to-r from-orange-400 to-red-500 text-white border-orange-600">
                <h3 className="font-black text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Daily Challenge
                </h3>
                <p className="text-sm font-bold mb-4 text-white/90">
                  Complete one assessment to keep your streak alive!
                </p>
                <Link href="/assessment">
                  <button className="duolingo-button duolingo-button-white w-full py-3 font-black text-orange-500">
                    TAKE QUIZ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}