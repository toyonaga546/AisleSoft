import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import { Logo } from '@/components/Logo';
import { MobileMenuButton } from '@/sections/Header/components/MobileMenuButton';

const PrivacyPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>プライバシーポリシー - アイルソフト</title>
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
              <Link href="/" className="hover:underline">トップ</Link>
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-center text-sky-600">プライバシーポリシー</h1>

        <p className="mb-4">
          株式会社アイルソフト（以下「当社」といいます）は、当社のプライバシーポリシーとして、以下の個人情報保護に対する基本方針及び個人情報に関する公表事項を定め、公開いたします。
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-500">個人情報保護に対する基本方針</h2>
        <p className="mb-4 text-gray-600">
          株式会社アイルソフトは、当社の「品質方針」に掲げる考えのもと、「業務分析およびソフトウェア開発・保守」事業を行っています。当社が事業活動を行う上で、個人情報を適切に取り扱うことは社会的責務であると考えています。当社では、この責務を全うするために、以下の取り組みを実施します。
        </p>

        <ol className="list-none space-y-4">
          <li>
            <h3 className="text-lg font-semibold text-gray-500">1. 個人情報の取り扱いについて</h3>
            <p>
              当社は、お客様の会社名、お名前、ご住所、ご連絡先の電話番号、メールアドレスなどの個人情報は、不正なアクセスや紛失、改ざん、漏洩などのないように、適切に管理させていただきます。
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-gray-500">2. 個人情報の管理について</h3>
            <p>
              当社は、お客様からご提供いただきました個人情報を適切に管理し、以下の何れかに該当する場合を除き、いかなる第三者にも開示いたしません。
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>お客様の同意がある場合</li>
              <li>お客様からのお問い合わせについて、当社の関連部門および関係会社から回答させていただくことが適切と判断される場合</li>
            </ul>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-gray-500">3. お客様の個人情報の利用について</h3>
            <p className="text-gray-600">あらかじめお客様に明示させていただきました目的の範囲内での利用に限定いたします。ただし、あらかじめお客様の同意をいただいた場合については、この限りではありません。</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-gray-500">4. 取り扱いの見直しについて</h3>
            <p className="text-gray-600">当社はお客様の個人情報の保護に関する法令等を遵守すると共に、その取り扱いにつきましては、適宜その見直しと改善に努めます。</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-gray-500">5. お問い合わせ先</h3>
            <p className="text-gray-600">
              本件に関する当社のお問い合わせ先は以下の通りです。<br />〒464-0821<br />愛知県名古屋市千種区末盛通１丁目18番地１　覚王ハイツ202号<br />℡ 052-734-7051 FAX 052-734-8050
            </p>
          </li>
        </ol>

        <footer className="mt-12 text-sm text-gray-500">
          Theme: Illdy. © Copyright 2019. Aislesoft Corp. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
};

export default PrivacyPage;
