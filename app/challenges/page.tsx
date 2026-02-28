'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function ChallengesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Cardio', 'Mindfulness', 'Nutrition', 'Lifestyle']

  const challenges = [
    {
      id: 1,
      icon: '🧘',
      name: '30-Day Yoga Streak',
      description: 'Complete 20 mins of daily yoga. Verify via photo proof or wearable data.',
      category: 'Mindfulness',
      prizePool: '5,000 MON',
      participants: 42,
      status: 'Active',
      daysLeft: 15,
    },
    {
      id: 2,
      icon: '🏃',
      name: '10K Steps Challenge',
      description: 'Hit 10,000 steps every day for a week. Syncs with Apple Health & Google Fit.',
      category: 'Cardio',
      prizePool: '12,500 MON',
      participants: 128,
      status: 'Active',
      daysLeft: 7,
    },
    {
      id: 3,
      icon: '🥗',
      name: 'Plant-Based February',
      description: 'Eat plant-based meals for 28 days. Upload meal photos to verify and earn.',
      category: 'Nutrition',
      prizePool: '3,000 MON',
      participants: 15,
      status: 'Active',
      daysLeft: 28,
    },
    {
      id: 4,
      icon: '🧘‍♀️',
      name: '5AM Meditation Club',
      description: 'Wake up and check in before 5:30 AM. Build discipline and earn rewards.',
      category: 'Lifestyle',
      prizePool: '8,000 MON',
      participants: 200,
      status: 'Active',
      daysLeft: 30,
    },
    {
      id: 5,
      icon: '💪',
      name: 'Strength Training Streak',
      description: '3x weekly strength sessions. Log workouts and earn rewards.',
      category: 'Cardio',
      prizePool: '6,500 MON',
      participants: 89,
      status: 'Active',
      daysLeft: 21,
    },
    {
      id: 6,
      icon: '🥕',
      name: 'Clean Eating Challenge',
      description: 'No processed foods for 14 days. Track your meals and wins.',
      category: 'Nutrition',
      prizePool: '4,000 MON',
      participants: 56,
      status: 'Active',
      daysLeft: 14,
    },
  ]

  const filteredChallenges = activeFilter === 'All' 
    ? challenges 
    : challenges.filter(c => c.category === activeFilter)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
              ❤️
            </div>
            <span className="text-xl font-bold text-white">HealthChain</span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/challenges" className="text-white transition-colors font-medium border-b-2 border-purple-500">
                Challenges
              </Link>
              <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors font-medium">
                Dashboard
              </Link>
              <Link href="/leaderboard" className="text-slate-300 hover:text-white transition-colors font-medium">
                Leaderboard
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-slate-800 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-slate-300 font-medium">Monad Testnet</span>
              </div>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 hidden sm:inline-flex">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">All Challenges</h1>
          <p className="text-slate-400">Choose a challenge and start earning crypto rewards</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-slate-800 sticky top-16 z-40 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <Link
              key={challenge.id}
              href={`/challenges/${challenge.id}`}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-purple-500/10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{challenge.icon}</div>
                  <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-semibold rounded-full">
                    {challenge.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{challenge.name}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{challenge.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div>
                    <div className="text-slate-400 text-xs font-medium">Prize Pool</div>
                    <div className="text-lg font-bold text-white">{challenge.prizePool}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-xs font-medium">{challenge.participants} joined</div>
                    <div className="text-lg font-bold text-green-400">{challenge.daysLeft}d left</div>
                  </div>
                </div>

                <Button
                  className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all"
                  onClick={(e) => e.preventDefault()}
                >
                  View Challenge
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                ❤️
              </div>
              <span className="text-white font-bold">HealthChain</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 HealthChain. Built on Monad Network.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
