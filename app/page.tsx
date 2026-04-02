'use client';

import Navbar from './components/Navbar';
import McpSetupPanel from './components/McpSetupPanel';

const GREEN = '#20D55A';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#000000' }}>
      <Navbar />

      <main className="flex-1 px-6 py-16 md:py-24" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <section className="text-center mb-16 md:mb-20">
            <span
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] mb-6 px-4 py-2 rounded-full border"
              style={{ color: 'rgba(255,255,255,0.45)', borderColor: 'rgba(255,255,255,0.45)' }}
            >
              <img
                src="https://four.meme/logo.png"
                alt="4Meme"
                className="w-4 h-4 rounded-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://bags.fm/assets/images/bags-icon.png';
                }}
                loading="lazy"
              />
              4Meme Data via MCP
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-5">
              4Meme data for
              <span style={{ color: GREEN }}> Everyone</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Query tokens, price, rankings, and tax info etc using MCP server & get data into Cursor and Claude. No code required.
            </p>
            {/* Works with: Cursor, Claude */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10">
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Use MCP server in
              </span>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 rounded-lg px-4 py-2.5 border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQbz3c2-DSKpInXJjhhenXinyn_9fZO9Dug&s"
                    alt="Cursor"
                    className="w-7 h-7 rounded-md object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-white/90">Cursor</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-4 py-2.5 border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQFko-zWIZk_pw/company-logo_200_200/B4EZhiRWKvHgAI-/0/1753995371543/claude_logo?e=2147483647&v=beta&t=CVNmFKyWig0Uo78oAr3II6KVLu_o0aXPtnt4S6XgOr8"
                    alt="Claude"
                    className="w-7 h-7 rounded-md object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-white/90">Claude</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#mcp-setup"
                className="px-6 py-3 rounded-lg text-sm font-semibold text-black transition-opacity hover:opacity-90"
                style={{ backgroundColor: GREEN }}
              >
                Setup MCP
              </a>
              <a
                href="#features"
                className="px-6 py-3 rounded-lg text-sm font-semibold border transition-colors hover:border-[#20D55A]"
                style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.15)' }}
              >
                Features
              </a>
            </div>
          </section>

          <McpSetupPanel />

          {/* Features */}
          <section id="features" className="mb-24 md:mb-32">
            <h2 className="text-sm font-medium uppercase tracking-wider mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Why 4Meme-MCP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div
                className="rounded-xl border p-6 md:p-7"
                style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <h3 className="text-base font-semibold text-white mb-2">No code</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Traders and researchers use 4Meme data from AI chats—no custom dashboard to build.
                </p>
              </div>
              <div
                className="rounded-xl border p-6 md:p-7"
                style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <h3 className="text-base font-semibold text-white mb-2">MCP everywhere</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  One integration works with Cursor, Claude, and any client that speaks Model Context Protocol.
                </p>
              </div>
              <div
                className="rounded-xl border p-6 md:p-7"
                style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <h3 className="text-base font-semibold text-white mb-2">On-chain Data</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Pull real-time 4Meme token info, price, and rankings directly into your AI assistant.
                </p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="pt-16 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="text-sm font-medium uppercase tracking-wider mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-black mb-4"
                  style={{ backgroundColor: GREEN }}
                >
                  1
                </div>
                <h3 className="text-white font-semibold mb-2">Connect</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Add the 4Meme-MCP server to your AI assistant (Cursor or Claude).
                </p>
              </div>
              <div className="text-center md:text-left">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-black mb-4"
                  style={{ backgroundColor: GREEN }}
                >
                  2
                </div>
                <h3 className="text-white font-semibold mb-2">Query</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Use tools: list tokens, token price, hot rankings, tax info, etc.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-black mb-4"
                  style={{ backgroundColor: GREEN }}
                >
                  3
                </div>
                <h3 className="text-white font-semibold mb-2">Analyze</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Get real-time insights and data to make informed trading decisions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
