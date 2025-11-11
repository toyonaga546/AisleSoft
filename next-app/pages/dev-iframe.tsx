import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

const DevIframePage: NextPage = () => {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans JP', sans-serif", minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <Head>
        <title>アイルソフト (開発ビュー)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header style={{ background: '#0ea5e9', color: 'white', padding: '12px 0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', height: 48 }}>
          <a href="/" aria-label="トップページへ" style={{ color: 'white', fontWeight: 700, textDecoration: 'none' }}>アイルソフト</a>
          <div style={{ marginLeft: 16 }}>
            <a href="http://localhost:5173" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Vite を別タブで開く</a>
          </div>
        </div>
      </header>

      <div style={{ height: 'calc(100vh - 48px)', width: '100%' }}>
        <iframe
          src="http://localhost:5173"
          title="Vite Dev Server"
          style={{ border: 'none', width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default DevIframePage;
