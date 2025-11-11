import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import { Logo } from '@/components/Logo';
import { MobileMenuButton } from '@/sections/Header/components/MobileMenuButton';
import { ContactForm } from '@/sections/ContactSection/components/ContactForm';
import { ContactInfo } from '@/sections/ContactSection/components/ContactInfo';

const CareersPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>人材募集 - アイルソフト</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-sky-600 text-white">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="inline-block" aria-label="トップページへ">
                <Logo white />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-white text-sm">
              <Link href="/#about" className="hover:underline">会社概要</Link>
              <Link href="/#products" className="hover:underline">製品</Link>
              <Link href="/#services" className="hover:underline">サービス</Link>
              <Link href="/#contact" className="hover:underline">お問い合わせ</Link>
              <Link href="/#staffing" className="hover:underline">人材派遣</Link>
              <Link href="/#company-info" className="hover:underline">企業情報</Link>
            </div>

            <div className="md:hidden">
              <MobileMenuButton />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-12 text-center text-sky-600">人材募集</h1>

        <p className="mb-4 text-lg md:text-xl">アイルソフトではやる気と向上心にあふれた人を募集中です。一緒に働きませんか？</p>
        <p className="mb-4">新卒・中途は問いません。経験がなくてもやる気があればきっとできます。お待ちしております。雇用形態は下記以外にも相談に応じます。楽しく会社を一緒に創っていきましょう。一度お問合せ下さい。</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">採用職種</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>プログラマ</li>
          <li>システムエンジニア</li>
          <li>アプリ経験者</li>
          <li>WEBプログラマ</li>
          <li>WEBデザイナ</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">雇用形態</h2>
        <p className="text-gray-700 mb-3">正社員（3ヶ月～6ヶ月の試用期間有） / 派遣社員 / 契約社員 / パート</p>
        <p className="text-gray-700 mb-3">給与・交通費：当社規定による</p>
        <p className="text-gray-700 mb-3">勤務地：当事務所、名古屋市、愛知県、岐阜県、三重県を中心とした各地</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">休日</h2>
        <p className="text-gray-700 mb-3">年末年始／GW／夏季休暇／有給休暇あり</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">福利厚生</h2>
        <p className="text-gray-700 mb-3">社会保険／雇用保険／労災保険／休業補償／退職金積立（試用期間後）</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">採用方法</h2>
        <p className="text-gray-700 mb-3">お問い合わせ：下記フォーム／電話／メール</p>
        <p className="text-gray-700 mb-3">審査：書類審査、筆記試験、面接の上、選考結果をご連絡します。</p>
        <p className="text-gray-700 mb-3">募集人員：数名</p>
        <p className="text-gray-700 mb-6">募集時期：随時</p>

        <div className="mt-12">
          <div className="text-center mb-8">
              <h2 className="text-sky-600 text-3xl font-bold mb-4">ご応募はこちら</h2>
            </div>

            <div className="items-stretch box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
              <ContactForm title="ご応募はこちらから" submitLabel="応募" />
              <ContactInfo />
            </div>
        </div>

        <footer className="mt-12 text-sm text-gray-500">
          Theme: Illdy. © Copyright 2019. Aislesoft Corp. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
};

export default CareersPage;
