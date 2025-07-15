'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "What sounds most exciting to you?",
    options: [
      { id: 'a', text: "Building cool apps and websites", emoji: "💻" },
      { id: 'b', text: "Helping people solve problems", emoji: "🤝" },
      { id: 'c', text: "Creating art and designs", emoji: "🎨" },
      { id: 'd', text: "Discovering how things work", emoji: "🔬" }
    ]
  },
  {
    id: 2,
    question: "Which superpower would you choose?",
    options: [
      { id: 'a', text: "Super intelligence", emoji: "🧠" },
      { id: 'b', text: "Healing powers", emoji: "✨" },
      { id: 'c', text: "Time travel", emoji: "⏰" },
      { id: 'd', text: "Mind reading", emoji: "👁️" }
    ]
  },
  {
    id: 3,
    question: "Your ideal weekend activity?",
    options: [
      { id: 'a', text: "Gaming or coding projects", emoji: "🎮" },
      { id: 'b', text: "Volunteering in community", emoji: "🌟" },
      { id: 'c', text: "Exploring nature outdoors", emoji: "🌲" },
      { id: 'd', text: "Reading and learning new things", emoji: "📚" }
    ]
  },
  {
    id: 4,
    question: "What motivates you most?",
    options: [
      { id: 'a', text: "Solving complex puzzles", emoji: "🧩" },
      { id: 'b', text: "Making people happy", emoji: "😊" },
      { id: 'c', text: "Creating something beautiful", emoji: "🌈" },
      { id: 'd', text: "Understanding the world", emoji: "🌍" }
    ]
  },
  {
    id: 5,
    question: "Your dream work environment?",
    options: [
      { id: 'a', text: "High-tech office with gadgets", emoji: "🏢" },
      { id: 'b', text: "Hospital or clinic helping people", emoji: "🏥" },
      { id: 'c', text: "Creative studio or workshop", emoji: "🎭" },
      { id: 'd', text: "Research lab or field work", emoji: "🔬" }
    ]
  }
];

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption) {
      setAnswers(prev => ({
        ...prev,
        [questions[currentQuestion].id]: selectedOption
      }));

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption('');
      } else {
        setIsCompleted(true);
        setTimeout(() => setShowResult(true), 1000);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id] || '');
    }
  };

  if (isCompleted && showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-500 flex items-center justify-center p-4">
        <div className="duolingo-card max-w-2xl w-full p-12 text-center">
          {/* Celebration Animation */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-6xl mascot-bounce">
              🎉
            </div>
            <h2 className="text-4xl font-black text-gray-800 mb-4">
              Amazing Work!
            </h2>
            <p className="text-xl text-gray-600 font-bold mb-8">
              We found some perfect career matches for you!
            </p>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-purple-100 rounded-2xl p-6 border-b-4 border-purple-300">
              <div className="text-4xl mb-3">💻</div>
              <div className="font-black text-purple-800 text-lg">TOP MATCH</div>
              <div className="text-purple-600 font-bold">Software Engineer</div>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6 border-b-4 border-blue-300">
              <div className="text-4xl mb-3">🎨</div>
              <div className="font-black text-blue-800 text-lg">GREAT FIT</div>
              <div className="text-blue-600 font-bold">UX Designer</div>
            </div>
            <div className="bg-green-100 rounded-2xl p-6 border-b-4 border-green-300">
              <div className="text-4xl mb-3">📊</div>
              <div className="font-black text-green-800 text-lg">GOOD MATCH</div>
              <div className="text-green-600 font-bold">Data Scientist</div>
            </div>
          </div>

          {/* XP Reward */}
          <div className="bg-yellow-100 rounded-2xl p-6 mb-8 border-b-4 border-yellow-300">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-black text-yellow-800 text-xl">+100 XP EARNED!</div>
            <div className="text-yellow-600 font-bold">Assessment Master achievement unlocked!</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <button className="duolingo-button duolingo-button-green px-8 py-4 text-lg font-black">
                CONTINUE
              </button>
            </Link>
            <Link href="/chat">
              <button className="duolingo-button duolingo-button-blue px-8 py-4 text-lg font-black">
                CHAT WITH AI
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isCompleted && !showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-500 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-5xl mascot-bounce">
            🔄
          </div>
          <h2 className="text-3xl font-black text-white mb-4">
            Analyzing Your Answers...
          </h2>
          <div className="bg-white/20 rounded-full h-4 w-64 mx-auto">
            <div className="bg-white h-4 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-500">
      {/* Header */}
      <header className="px-4 py-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2 text-white font-bold">
            <span className="text-2xl">←</span>
            <span>BACK</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-white font-black">
              {currentQuestion + 1} / {questions.length}
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-white/20 rounded-full h-4 mb-2 cursor-pointer hover:bg-white/30 transition-all duration-300">
              <div 
                className="duolingo-progress h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center text-white font-bold">
              {Math.round(progress)}% Complete
            </div>
          </div>

          {/* Question Card */}
          <div className="duolingo-card p-8 mb-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl mascot-bounce cursor-pointer">
              🤔
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-8 leading-tight">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`option-card w-full p-6 text-left ${
                    selectedOption === option.id ? 'selected' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl wiggle-on-hover">{option.emoji}</div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-800 text-lg">
                        {option.text}
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-3 transition-all duration-300 ${
                      selectedOption === option.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === option.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`duolingo-button duolingo-button-white px-8 py-3 font-black ${
                currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              BACK
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`duolingo-button duolingo-button-blue px-8 py-3 font-black ${
                !selectedOption ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'FINISH' : 'NEXT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}