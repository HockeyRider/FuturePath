'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hey there! 👋 I'm Duo, your AI career coach! I'm here to help you explore awesome careers, understand different college majors, and answer any questions about your future. What would you like to chat about?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    { text: "What's computer science like?", emoji: "💻" },
    { text: "How do I become a doctor?", emoji: "👩‍⚕️" },
    { text: "What careers help people?", emoji: "🤝" },
    { text: "Should I go to college?", emoji: "🎓" },
    { text: "What are the best paying jobs?", emoji: "💰" },
    { text: "How do I find internships?", emoji: "💼" }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's such a great question! 🤔 Computer science is like being a digital architect - you get to build apps, websites, games, and even AI systems like me! You'll learn programming languages like Python and JavaScript, solve cool puzzles, and create things that millions of people might use. Plus, tech companies often have amazing perks like free food and game rooms! 🎮",
        "Awesome choice! 🌟 Becoming a doctor is challenging but super rewarding. You'll need to take lots of science classes in high school (biology, chemistry, physics), then go to college for 4 years, medical school for 4 years, and residency training. It's a long journey, but you'll literally save lives every day! There are so many specialties too - pediatrics, surgery, psychiatry, emergency medicine. What interests you most?",
        "I love that you want to help people! 💝 There are SO many careers focused on helping others: teachers inspire young minds, social workers support families, therapists help with mental health, nurses care for patients, firefighters save lives, and even engineers design safer cars and buildings. What kind of helping speaks to your heart?"
      ];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <div className="text-white font-black">Duo AI Coach</div>
              <div className="text-white/80 text-sm font-bold">Online & Ready to Help!</div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Quick Prompts Sidebar */}
            <div className="lg:col-span-1">
              <div className="duolingo-card p-6 sticky top-6">
                <h3 className="font-black text-gray-800 text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  Quick Questions
                </h3>
                <div className="space-y-3">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickPrompt(prompt.text)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-xl border-2 border-transparent hover:border-blue-200 transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{prompt.emoji}</span>
                        <span className="text-sm font-bold text-gray-700">{prompt.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <div className="duolingo-card h-[600px] flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                          🤖
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-4 rounded-2xl border-b-4 ${
                          message.role === 'user'
                            ? 'bg-blue-500 text-white border-blue-600'
                            : 'bg-white text-gray-800 border-gray-200'
                        }`}
                      >
                        <p className="font-semibold leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 font-bold ${
                          message.role === 'user' ? 'text-blue-200' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                          😊
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl">
                        🤖
                      </div>
                      <div className="bg-white p-4 rounded-2xl border-b-4 border-gray-200">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="p-6 border-t-2 border-gray-100">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about careers..."
                      className="flex-1 p-4 border-2 border-gray-200 rounded-2xl font-semibold focus:border-blue-500 focus:outline-none"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      className="duolingo-button duolingo-button-blue px-6 py-4 font-black disabled:opacity-50"
                    >
                      SEND
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 font-bold text-center">
                    Duo is here to help! Remember to double-check important info with official sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}