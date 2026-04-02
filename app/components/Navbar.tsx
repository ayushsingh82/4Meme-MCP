import Link from 'next/link';
import MemeMCPLogo from './MemeMCPLogo';

const GREEN = '#20D55A';

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 border-b border-white/10" style={{ backgroundColor: '#080808' }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <MemeMCPLogo variant="icon" size={38} />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight text-white">
              4Meme
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: GREEN }}>
              MCP Server
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
