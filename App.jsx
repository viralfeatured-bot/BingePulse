import React, { useState } from 'react';
import { 
  Play, ShieldAlert, Download, ThumbsUp, Sparkles, Flame, 
  DollarSign, Globe, Tv, Lock, Check, 
  MessageSquare, Plus, Search, Bell, User, X, Film, Zap
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState('national');
  const [selectedContent, setSelectedContent] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [affiliateStats] = useState({
    totalViews: 142500,
    monthlyTraffic: 38200,
    plansSold6Mo: 148,
    plansSold12Mo: 92,
    totalEarnings: 3450.00
  });

  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'AnimeKing99', text: 'Hyped for Episode 12 tonight!', role: 'user', time: '10:40 AM' },
    { id: 2, user: 'CinePhile', text: 'The sub quality on BingePulse is top tier.', role: 'user', time: '10:41 AM' },
    { id: 3, user: 'AIModerator', text: 'System: Chat room monitored by AI. Keep discussion friendly!', role: 'ai', time: '10:42 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [userViolations, setUserViolations] = useState(0);
  const [isBanned, setIsBanned] = useState(false);

  const forbiddenWords = ['badword', 'spam', 'scam', 'hate', 'trash', 'illegal', 'hack'];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || isBanned) return;

    const lowerText = newMessage.toLowerCase();
    const hasViolation = forbiddenWords.some(word => lowerText.includes(word));

    if (hasViolation) {
      const nextViolations = userViolations + 1;
      setUserViolations(nextViolations);

      if (nextViolations >= 3) {
        setIsBanned(true);
        setChatMessages(prev => [
          ...prev,
          {
            id: Date.now(),
            user: 'AI Moderator',
            text: '🚨 User was blocked and removed from the chat room for repeated community guidelines violations.',
            role: 'ai',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        setChatMessages(prev => [
          ...prev,
          {
            id: Date.now(),
            user: 'AI Moderator',
            text: `⚠️ Warning (${nextViolations}/3): Your message contained inappropriate content and was removed.`,
            role: 'ai',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    } else {
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          user: 'You',
          text: newMessage,
          role: 'user',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
    setNewMessage('');
  };

  const moviesAndAnime = [
    {
      id: 1,
      title: 'Neon Cyberpunk: Zero',
      type: 'Anime',
      isExclusive: true,
      genre: 'Action, Sci-Fi',
      rating: '98% Liked',
      quality: '4K Ultra HD',
      audio: 'Sub & Dub (EN, JP, ES)',
      download: '1080p / 4K Available',
      todayPick: true,
      banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80',
      description: 'In a neon-drenched metropolis, a rogue hacker unravels the core network holding society hostage.'
    },
    {
      id: 2,
      title: 'Shadow Chronicles: Live Stream',
      type: 'Upcoming Live',
      isExclusive: false,
      genre: 'Fantasy, Adventure',
      rating: '95% Liked',
      quality: '1080p HD',
      audio: 'Sub (EN, JP)',
      download: 'Disabled (Live Broadcast)',
      todayPick: false,
      banner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
      description: 'Join creators live as they premiere unseen concept shorts and host interactive Q&A.'
    },
    {
      id: 3,
      title: 'Starlight Odyssey',
      type: 'Movie',
      isExclusive: true,
      genre: 'Drama, Sci-Fi',
      rating: '92% Liked',
      quality: '4K HDR',
      audio: 'Sub & Dub (Multi-Lang)',
      download: 'Standard & High Quality',
      todayPick: true,
      banner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
      description: 'Humanity reaches beyond the solar system only to discover forgotten signals from home.'
    }
  ];

  const creatorShorts = [
    { id: 101, title: 'Top 10 Anime Easter Eggs You Missed', creator: 'OtakuCentral', views: '240K', duration: '0:58' },
    { id: 102, title: 'Making 4K Visual Effects in 60 Seconds', creator: 'FXMaster', views: '510K', duration: '0:45' },
    { id: 103, title: 'Upcoming Fall Anime Tier List', creator: 'BingeGeek', views: '180K', duration: '0:59' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              BingePulse
            </span>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <button onClick={() => setActiveTab('home')} className={`hover:text-purple-400 transition ${activeTab === 'home' ? 'text-purple-400 font-bold' : ''}`}>Explore</button>
            <button onClick={() => setActiveTab('live')} className={`hover:text-purple-400 transition ${activeTab === 'live' ? 'text-purple-400 font-bold' : ''}`}>Live Shows</button>
            <button onClick={() => setActiveTab('creator')} className={`hover:text-purple-400 transition ${activeTab === 'creator' ? 'text-purple-400 font-bold' : ''}`}>Creator Studio</button>
            <button onClick={() => setActiveTab('plans')} className={`hover:text-purple-400 transition ${activeTab === 'plans' ? 'text-purple-400 font-bold' : ''}`}>Subscriptions</button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsSubscribed(!isSubscribed)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition ${
              isSubscribed ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 'bg-purple-500/10 border-purple-500/50 text-purple-300 hover:bg-purple-500/20'
            }`}
          >
            {isSubscribed ? 'PRO VIP ACTIVE' : 'UPGRADE TO PRO'}
          </button>

          <Search className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
          <Bell className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
          <User className="w-6 h-6 text-purple-400 cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-8">
        <div className="flex md:hidden space-x-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs font-semibold">
          <button onClick={() => setActiveTab('home')} className={`px-4 py-2 rounded-lg ${activeTab === 'home' ? 'bg-purple-600' : 'bg-slate-800'}`}>Explore</button>
          <button onClick={() => setActiveTab('live')} className={`px-4 py-2 rounded-lg ${activeTab === 'live' ? 'bg-purple-600' : 'bg-slate-800'}`}>Live</button>
          <button onClick={() => setActiveTab('creator')} className={`px-4 py-2 rounded-lg ${activeTab === 'creator' ? 'bg-purple-600' : 'bg-slate-800'}`}>Creator Studio</button>
          <button onClick={() => setActiveTab('plans')} className={`px-4 py-2 rounded-lg ${activeTab === 'plans' ? 'bg-purple-600' : 'bg-slate-800'}`}>Plans</button>
        </div>

        {activeTab === 'home' && (
          <>
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1400&auto=format&fit=crop&q=80" 
                alt="Banner" 
                className="w-full h-96 object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-red-600 text-white font-bold text-xs rounded-full flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> TODAY'S TOP PICK
                  </span>
                  <span className="px-3 py-1 bg-purple-500/30 border border-purple-500/50 text-purple-300 text-xs rounded-full">
                    Exclusive Anime Series
                  </span>
                </div>
                <h1 className="text-4xl font-extrabold text-white mb-2">Neon Cyberpunk: Zero</h1>
                <p className="text-slate-300 max-w-2xl text-sm mb-6">
                  In a neon-drenched metropolis, a rogue hacker unravels the core network holding society hostage. Experience 4K Sub & Dub streaming with interactive fan rooms.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setSelectedContent(moviesAndAnime[0])}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl flex items-center space-x-2 shadow-lg shadow-purple-600/40 transition"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span>Watch Now</span>
                  </button>
                  <button 
                    onClick={() => setSelectedContent(moviesAndAnime[0])}
                    className="px-6 py-3 bg-slate-800/80 hover:bg-slate-700 font-bold rounded-xl border border-slate-700 flex items-center space-x-2 transition"
                  >
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span>View HD Details & Dubs</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center space-x-2">
                  <Film className="w-5 h-5 text-pink-500" />
                  <span>Free Community Shorts</span>
                </h2>
                <span className="text-xs text-slate-400">Watch Free • No Subscription Needed</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {creatorShorts.map(short => (
                  <div key={short.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition cursor-pointer">
                    <div className="relative h-40 bg-slate-800 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                      <Play className="w-10 h-10 text-purple-400 opacity-80" />
                      <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs rounded">{short.duration}</span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-100">{short.title}</h3>
                    <div className="flex justify-between items-center text-xs text-slate-400 mt-2">
                      <span>By @{short.creator}</span>
                      <span>{short.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Tv className="w-5 h-5 text-purple-400" />
                <span>Trending Shows & Exclusive Releases</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {moviesAndAnime.map(item => (
                  <div key={item.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition flex flex-col">
                    <img src={item.banner} alt={item.title} className="h-48 w-full object-cover" />
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-semibold text-purple-400">{item.genre}</span>
                          {item.isExclusive ? (
                            <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold rounded flex items-center space-x-1">
                              <Lock className="w-3 h-3" /> VIP
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold rounded">
                              FREE
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-400 line-clamp-2">{item.description}</p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-300">{item.rating}</span>
                        <button 
                          onClick={() => setSelectedContent(item)}
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg transition text-purple-300"
                        >
                          Details & Options
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'live' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1000&auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-50" alt="Live stream" />
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span>LIVE NOW</span>
                </div>
                <div className="absolute text-center p-6 bg-slate-950/70 backdrop-blur rounded-2xl max-w-md">
                  <Play className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Upcoming Shows Preview & Creator Q&A</h3>
                  <p className="text-xs text-slate-400 mt-1">Directing monthly audience traffic to new series releases.</p>
                </div>
              </div>

              <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-lg">Official Anime Creator Broadcast</h2>
                  <p className="text-xs text-slate-400">14,290 viewers watching live</p>
                </div>
                <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 font-bold text-xs rounded-xl transition">
                  Subscribe to Channel
                </button>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 flex flex-col h-[520px]">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <h3 className="font-bold text-sm">Live Chat Room</h3>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] rounded font-mono flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" /> AI Moderation Active
                </span>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {chatMessages.map(msg => (
                  <div key={msg.id} className={`p-2.5 rounded-xl text-xs ${
                    msg.role === 'ai' 
                      ? 'bg-purple-950/40 border border-purple-500/30 text-purple-200' 
                      : 'bg-slate-800/60 border border-slate-800'
                  }`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-bold ${msg.role === 'ai' ? 'text-purple-400' : 'text-slate-300'}`}>{msg.user}</span>
                      <span className="text-[10px] text-slate-500">{msg.time}</span>
                    </div>
                    <p className="text-slate-200">{msg.text}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 flex gap-2">
                <input 
                  type="text"
                  disabled={isBanned}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={isBanned ? "Blocked from chat due to violations" : "Type a comment... (AI moderated)"}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
                <button 
                  type="submit" 
                  disabled={isBanned}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-xs font-bold rounded-xl transition disabled:opacity-50"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'creator' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-purple-900/40 via-slate-900 to-slate-900 rounded-3xl border border-purple-500/30">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-black text-white">Creator & Affiliate Dashboard</h2>
                  <p className="text-slate-400 text-xs mt-1">Earn revenue by creating content and directing monthly user traffic.</p>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-xs font-bold rounded-xl flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Upload Video / Short</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Total Audience Views</span>
                  <span className="text-xl font-black text-purple-400">{affiliateStats.totalViews.toLocaleString()}</span>
                </div>
                <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Monthly Directed Traffic</span>
                  <span className="text-xl font-black text-pink-400">{affiliateStats.monthlyTraffic.toLocaleString()} clicks</span>
                </div>
                <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">6-Month & 12-Month Plans Sold</span>
                  <span className="text-xl font-black text-emerald-400">{affiliateStats.plansSold6Mo + affiliateStats.plansSold12Mo}</span>
                </div>
                <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Total Affiliate Revenue</span>
                  <span className="text-xl font-black text-amber-400">${affiliateStats.totalEarnings.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="font-bold text-sm flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Your Unique Affiliate Link</span>
              </h3>
              <p className="text-xs text-slate-400">
                Share this link in your social video descriptions to earn up to 25% recurring commission on every 6-Month or 12-Month subscription sold.
              </p>
              <div className="flex items-center space-x-3">
                <input 
                  type="text" 
                  readOnly 
                  value="https://bingepulse.com/ref/creator_otaku99" 
                  className="bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-mono w-full text-purple-300"
                />
                <button 
                  onClick={() => alert('Affiliate referral link copied!')}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 font-bold text-xs rounded-xl transition whitespace-nowrap"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'plans' && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <h2 className="text-3xl font-black">Choose Your BingePulse Pass</h2>
              <p className="text-slate-400 text-xs">Unlock exclusive movies, anime series, 4K sub/dub downloads, and ad-free live streams.</p>
              
              <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl mt-4">
                <button 
                  onClick={() => setSelectedRegion('national')}
                  className={`px-5 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                    selectedRegion === 'national' ? 'bg-purple-600 text-white' : 'text-slate-400'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>National (Domestic)</span>
                </button>
                <button 
                  onClick={() => setSelectedRegion('international')}
                  className={`px-5 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                    selectedRegion === 'international' ? 'bg-purple-600 text-white' : 'text-slate-400'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>International (Global)</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">Standard Access</span>
                  <h3 className="text-2xl font-black">6 Months Pass</h3>
                  <div className="my-4">
                    <span className="text-4xl font-black">
                      {selectedRegion === 'national' ? '$29.99' : '$49.99'}
                    </span>
                    <span className="text-xs text-slate-400"> / 6 months</span>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /> <span>Full access to all exclusive movies & anime</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /> <span>1080p Full HD Sub & Dub options</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /> <span>Live Stream chat room participation</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 mt-8 bg-slate-800 hover:bg-slate-700 font-bold rounded-xl text-xs transition">
                  Get 6-Month Plan
                </button>
              </div>

              <div className="bg-gradient-to-b from-purple-950/40 to-slate-900 rounded-3xl p-8 border-2 border-purple-500 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-widest block mb-2">VIP Unlimited</span>
                  <h3 className="text-2xl font-black">12 Months Pass</h3>
                  <div className="my-4">
                    <span className="text-4xl font-black">
                      {selectedRegion === 'national' ? '$49.99' : '$79.99'}
                    </span>
                    <span className="text-xs text-slate-400"> / 12 months</span>
                  </div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /> <span>Everything in 6 Months Pass</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /> <span>4K Ultra HD + HDR Streaming</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /> <span>Unlimited offline downloads</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 mt-8 bg-purple-600 hover:bg-purple-500 font-bold rounded-xl text-xs transition">
                  Get 12-Month Plan
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedContent && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-end p-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl relative">
              <button 
                onClick={() => setSelectedContent(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 bg-purple-600 text-[10px] font-bold rounded">
                  {selectedContent.type}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{selectedContent.rating}</span>
              </div>

              <h3 className="text-xl font-bold">{selectedContent.title}</h3>
              <p className="text-xs text-slate-300">{selectedContent.description}</p>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Genre:</span>
                  <span className="font-semibold text-purple-300">{selectedContent.genre}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Video Quality:</span>
                  <span className="font-semibold text-emerald-400">{selectedContent.quality}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Audio & Subs:</span>
                  <span className="font-semibold">{selectedContent.audio}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Download Status:</span>
                  <span className="font-semibold text-blue-400">{selectedContent.download}</span>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  onClick={() => alert('Downloading content...')}
                  className="flex-1 py-2.5 bg-purple-600 hover:bg-purple-500 text-xs font-bold rounded-xl flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download HD</span>
                </button>
                <button 
                  onClick={() => alert('Added to your watchlist!')}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl"
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
