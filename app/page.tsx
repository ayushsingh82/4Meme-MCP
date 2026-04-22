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
                src="https://four-meme.gitbook.io/four.meme/~gitbook/image?url=https%3A%2F%2F3837000096-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252F9fGqliRxSs2MBO4CL3n7%252Fsites%252Fsite_m0EJr%252Ficon%252FiUIyxOLmu3VP4PEZL7Xm%252FFPUR.png%3Falt%3Dmedia%26token%3D17ffd2c3-f8ae-4e3b-b641-beb599d04e4b&width=32&dpr=2&quality=100&sign=e2df749e&sv=2"
                alt="4Meme"
                className="w-4 h-4 rounded-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://four-meme.gitbook.io/four.meme/~gitbook/image?url=https%3A%2F%2F3837000096-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252F9fGqliRxSs2MBO4CL3n7%252Fsites%252Fsite_m0EJr%252Ficon%252FiUIyxOLmu3VP4PEZL7Xm%252FFPUR.png%3Falt%3Dmedia%26token%3D17ffd2c3-f8ae-4e3b-b641-beb599d04e4b&width=32&dpr=2&quality=100&sign=e2df749e&sv=2';
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

      <footer className="border-t px-6 py-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
           4Meme-MCP
          </span>
          <a
            href="https://github.com/ayushsingh82/4Meme-MCP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub repository"
            className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.297 2.748-1.027 2.748-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
