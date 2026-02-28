'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Medal } from 'lucide-react'

export default function LeaderboardPage() {
  const leaderboard = [
    {
      rank: 1,
      username: 'Alex Chen',
      address: '0x3f...82a1',
      streak: 30,
      earned: 180,
      challenge: '30-Day Yoga Streak',
      medal: '🥇',
    },
    {
      rank: 2,
      username: 'Sarah Mitchell',
      address: '0x9a...b2c9',
      streak: 29,
      earned: 165,
      challenge: '29-Day Yoga Streak',
      medal: '🥈',
    },
    {
      rank: 3,
      username: 'You',
      address: '0x7f3a...9b2c',
      streak: 26,
      earned: 142,
      challenge: '26-Day Yoga Streak',
      medal: '🥉',
      isCurrentUser: true,
    },
    {
      rank: 4,
      username: 'Jordan Williams',
      address: '0x21...d5f1',
      streak: 25,
      earned: 138,
      challenge: '25-Day Yoga Streak',
      medal: '4️⃣',
    },
    {
      rank: 5,
      username: 'Emma Rodriguez',
      address: '0x55...e8r9',
      streak: 22,
      earned: 125,
      challenge: '22-Day Yoga Streak',
      medal: '5️⃣',
    },
    {
      rank: 6,
      username: 'Marcus Johnson',
      address: '0x42...f4a2',
      streak: 21,
      earned: 118,
      challenge: '21-Day Yoga Streak',
      medal: '6️⃣',
    },
    {
      rank: 7,
      username: 'Sophie Brown',
      address: '0x88...c3d1',
      streak: 20,
      earned: 112,
      challenge: '20-Day Yoga Streak',
      medal: '7️⃣',
    },
    {
      rank: 8,
      username: 'David Kumar',
      address: '0xbc...a9e7',
      streak: 18,
      earned: 105,
      challenge: '18-Day Yoga Streak',
      medal: '8️⃣',
    },
    {
      rank: 9,
      username: 'Olivia Garcia',
      address: '0xd2...1f5c',
      streak: 16,
      earned: 95,
      challenge: '16-Day Yoga Streak',
      medal: '9️⃣',
    },
    {
      rank: 10,
      username: 'Liam O\'Connor',
      address: '0xe9...7b3a',
      streak: 15,
      earned: 88,
      challenge: '15-Day Yoga Streak',
      medal: '🔟',
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
              <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors font-medium">
                Dashboard
              </Link>
              <Link href="/leaderboard" className="text-white transition-colors font-medium border-b-2 border-purple-500">
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
          <h1 className="text-4xl font-bold text-white mb-2">Global Leaderboard</h1>
          <p className="text-slate-400">Top performers earning crypto rewards</p>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="space-y-2">
          {leaderboard.map((entry, idx) => (
            <div
              key={entry.rank}
              className={`flex items-center gap-4 p-6 rounded-xl border transition-all ${
                entry.isCurrentUser
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Rank */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <span className="text-3xl">{entry.medal}</span>
              </div>

              {/* User Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg font-bold text-white">{entry.username}</span>
                  <span className="text-slate-500 text-sm font-mono">{entry.address}</span>
                  {entry.isCurrentUser && (
                    <span className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded">YOU</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm">{entry.challenge}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 text-right">
                <div>
                  <div className="text-slate-400 text-xs font-medium">STREAK</div>
                  <div className="text-2xl font-bold text-orange-400">{entry.streak}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-medium">EARNED</div>
                  <div className="text-2xl font-bold text-green-400">{entry.earned} MON</div>
                </div>
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
