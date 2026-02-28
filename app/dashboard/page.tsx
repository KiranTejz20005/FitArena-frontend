'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, TrendingUp, Zap, Trophy } from 'lucide-react'

export default function DashboardPage() {
  const userStats = {
    address: '0x7f3a...9b2c',
    streak: 22,
    rank: 3,
    totalEarned: 142,
    walletBalance: 8.5,
  }

  const activeChallenges = [
    {
      id: 1,
      icon: '🧘',
      name: '30-Day Yoga Streak',
      description: 'Maintains flexibility & mindfulness',
      progress: 68,
      day: '20/30',
      reward: 2.4,
    },
    {
      id: 2,
      icon: '🏃',
      name: '10K Steps Challenge',
      description: 'Daily cardio boost',
      progress: 43,
      day: '3.4k/10k',
      reward: 5.2,
    },
    {
      id: 3,
      icon: '🥗',
      name: 'Plant-Based February',
      description: 'Eat clean, train dirty',
      progress: 85,
      day: '24/28',
      reward: 3.1,
    },
  ]

  const claimedRewards = [
    {
      id: 1,
      name: '10K Steps Challenge',
      reward: 8.5,
      date: '2 days ago',
      icon: '🏃',
    },
    {
      id: 2,
      name: '7-Day Run Streak',
      reward: 5.2,
      date: '5 days ago',
      icon: '🏃‍♂️',
    },
  ]

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
              <Link href="/challenges" className="text-slate-300 hover:text-white transition-colors font-medium">
                Challenges
              </Link>
              <Link href="/dashboard" className="text-white transition-colors font-medium border-b-2 border-purple-500">
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
      <section className="py-8 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{userStats.address}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-green-400 flex items-center gap-1">
                  <Zap className="w-4 h-4" /> {userStats.streak}-day streak
                </span>
                <span className="text-purple-400 flex items-center gap-1">
                  <Trophy className="w-4 h-4" /> Rank #{userStats.rank}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">+{userStats.totalEarned} MON</div>
              <p className="text-slate-400 text-sm">Total Earned</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="text-slate-400 text-sm font-medium mb-2">Joined</div>
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-slate-400 text-xs mt-2">Challenges</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="text-slate-400 text-sm font-medium mb-2">Won</div>
            <div className="text-3xl font-bold text-white">9</div>
            <div className="text-slate-400 text-xs mt-2">Victories</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="text-slate-400 text-sm font-medium mb-2">Lost</div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-slate-400 text-xs mt-2">Defeats</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="text-slate-400 text-sm font-medium mb-2">Win Rate</div>
            <div className="text-3xl font-bold text-white">75%</div>
            <div className="text-slate-400 text-xs mt-2">Performance</div>
          </div>
        </div>
      </section>

      {/* Active Challenges */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Active Challenges</h2>
        <div className="space-y-4">
          {activeChallenges.map((challenge) => (
            <Link key={challenge.id} href={`/challenges/${challenge.id}`}>
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{challenge.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{challenge.name}</h3>
                      <p className="text-slate-400 text-sm">{challenge.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-400 font-bold">{challenge.day}</div>
                    <div className="text-slate-400 text-xs">Progress</div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all" 
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{challenge.progress}% Complete</span>
                  <span className="text-green-400 font-bold">+{challenge.reward} MON</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Claimed Rewards */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Recently Claimed</h2>
        <div className="space-y-4">
          {claimedRewards.map((reward) => (
            <div key={reward.id} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{reward.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white">{reward.name}</h3>
                  <p className="text-slate-400 text-sm">{reward.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-bold text-xl">+{reward.reward} MON</div>
              </div>
            </div>
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
