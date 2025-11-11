import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

const CareersPage: NextPage = () => {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans JP', sans-serif", minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <Head>
        <title>人材募集 - アイルソフト</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header style={{ background: '#0ea5e9', color: 'white', padding: '20px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <a href="/" aria-label="トップページへ" style={{ color: 'white', fontWeight: 700, textDecoration: 'none' }}>アイルソフト</a>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '32px auto', padding: '0 16px' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>人材募集</h1>

        <p style={{ fontSize: 18, marginBottom: 12 }}>アイルソフトではやる気と向上心にあふれた人を募集中です。一緒に働きませんか？</p>
        <p style={{ marginBottom: 12 }}>新卒・中途は問いません。経験がなくてもやる気があればきっとできます。お待ちしております。雇用形態は下記以外にも相談に応じます。楽しく会社を一緒に創っていきましょう。一度お問合せ下さい。</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>採用職種</h2>
        <ul>
          <li>プログラマ</li>
          <li>システムエンジニア</li>
          <li>アプリ経験者</li>
          <li>WEBプログラマ</li>
          <li>WEBデザイナ</li>
        </ul>

        <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>雇用形態</h2>
        <p>正社員（3ヶ月～6ヶ月の試用期間有） / 派遣社員 / 契約社員 / パート</p>
        <p>給与・交通費：当社規定による</p>
        <p>勤務地：当事務所、名古屋市、愛知県、岐阜県、三重県を中心とした各地</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>休日</h2>
        <p>年末年始／GW／夏季休暇／有給休暇あり</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>福利厚生</h2>
        <p>社会保険／雇用保険／労災保険／休業補償／退職金積立（試用期間後）</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>採用方法</h2>
        <p>お問い合わせ：下記フォーム／電話／メール</p>
        <p>審査：書類審査、筆記試験、面接の上、選考結果をご連絡します。</p>
        <p>募集人員：数名</p>
        <p>募集時期：随時</p>

        <footer style={{ marginTop: 28, color: '#64748b' }}>
          Theme: Illdy. © Copyright 2019. Aislesoft Corp. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
};

export default CareersPage;
