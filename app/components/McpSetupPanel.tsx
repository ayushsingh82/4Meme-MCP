'use client';

import { useMemo, useState } from 'react';

const GREEN = '#20D55A';

const cursorConfig = `{
  "mcpServers": {
    "4mememcp": {
      "command": "bash",
      "args": ["\${workspaceFolder}/mcp-server/run-mcp.sh"]
    }
  }
}`;

const claudeConfig = `{
  "mcpServers": {
    "4mememcp": {
      "command": "bash",
      "args": ["/absolute/path/to/4Meme-MCP/mcp-server/run-mcp.sh"]
    }
  }
}`;

const endpointsText = `four.meme API base URL:
https://four.meme/meme-api/v1

Read-only endpoints used:
- /public/config
- /private/token/get
- /private/token/getById
- /rankings (Hot, 24h volume, newest, graduated)
- /token/info (On-chain via helper)
- /buy/sell/quotes (On-chain via helper)

MCP transport:
- Local stdio server (dev):
  npm run mcp:dev

Input examples:
- address: "0x1234...abcd"
- token: "0x1234...abcd"
- userAddress: "0xabcd...1234"

Notes:
- Cursor config above assumes workspace root is 4Meme-MCP.
- If workspace root is parent folder, use \${workspaceFolder}/4Meme-MCP/mcp-server/run-mcp.sh.
- For Claude Desktop, replace /absolute/path/to/4Meme-MCP with your real local path.`;

export default function McpSetupPanel() {
  const [target, setTarget] = useState<'cursor' | 'claude'>('cursor');
  const [copied, setCopied] = useState<'config' | 'endpoints' | null>(null);

  const config = useMemo(() => (target === 'cursor' ? cursorConfig : claudeConfig), [target]);

  async function copyText(kind: 'config' | 'endpoints') {
    const text = kind === 'config' ? config : endpointsText;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section id="mcp-setup" className="mb-24 md:mb-32">
      <h2 className="text-sm font-medium uppercase tracking-wider mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
        MCP Setup
      </h2>

      <div className="rounded-xl border p-4 md:p-6" style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex rounded-lg border overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
            <button
              type="button"
              onClick={() => setTarget('cursor')}
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: target === 'cursor' ? GREEN : 'transparent',
                color: target === 'cursor' ? '#000000' : 'rgba(255,255,255,0.8)',
              }}
            >
              Cursor
            </button>
            <button
              type="button"
              onClick={() => setTarget('claude')}
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: target === 'claude' ? GREEN : 'transparent',
                color: target === 'claude' ? '#000000' : 'rgba(255,255,255,0.8)',
              }}
            >
              Claude
            </button>
          </div>

          <button
            type="button"
            onClick={() => copyText('config')}
            className="px-3 py-2 rounded-lg text-xs font-semibold border transition-colors hover:border-[#20D55A]"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
          >
            {copied === 'config' ? 'Copied config' : `Copy ${target} config`}
          </button>
        </div>

        <pre className="rounded-lg p-4 text-xs md:text-sm overflow-x-auto border" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', backgroundColor: '#070707' }}>
          <code>{config}</code>
        </pre>

        <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <h3 className="text-sm font-semibold text-white">Endpoints and transport</h3>
            <button
              type="button"
              onClick={() => copyText('endpoints')}
              className="px-3 py-2 rounded-lg text-xs font-semibold border transition-colors hover:border-[#20D55A]"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
            >
              {copied === 'endpoints' ? 'Copied endpoints' : 'Copy endpoints'}
            </button>
          </div>
          <pre className="rounded-lg p-4 text-xs md:text-sm overflow-x-auto border" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.78)', backgroundColor: '#070707' }}>
            <code>{endpointsText}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
