import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const PrivacyPage: NextPage = () => {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans JP', sans-serif", background: "#f8fafc", minHeight: "100vh", color: "#0f172a" }}>
      <Head>
        <title>プライバシーポリシー - アイルソフト</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header style={{ background: "#0ea5e9", color: "white", padding: "20px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
          <a href="/" aria-label="トップページへ" style={{ color: "white", fontWeight: 700, textDecoration: "none" }}>アイルソフト</a>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "32px auto", padding: "0 16px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>プライバシーポリシー</h1>

        <p>
          株式会社アイルソフト（以下「当社」といいます）は、当社のプライバシーポリシーとして、以下の個人情報保護に対する基本方針及び個人情報に関する公表事項を定め、公開いたします。
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 24 }}>個人情報保護に対する基本方針</h2>
        <p>
          株式会社アイルソフトは、当社の「品質方針」に掲げる考えのもと、「業務分析およびソフトウェア開発・保守」事業を行っています。当社が事業活動を行う上で、個人情報を適切に取り扱うことは社会的責務であると考えています。当社では、この責務を全うするために、以下の取り組みを実施します。
        </p>

        <ol>
          <li style={{ marginTop: 12 }}>
            <strong>1. 個人情報の取り扱いについて</strong>
            <p>
              当社は、お客様の会社名、お名前、ご住所、ご連絡先の電話番号、メールアドレスなどの個人情報は、不正なアクセスや紛失、改ざん、漏洩などのないように、適切に管理させていただきます。
            </p>
          </li>
          <li style={{ marginTop: 12 }}>
            <strong>2. 個人情報の管理について</strong>
            <p>
              当社は、お客様からご提供いただきました個人情報を適切に管理し、以下の何れかに該当する場合を除き、いかなる第三者にも開示いたしません。
            </p>
            <ul>
              <li>お客様の同意がある場合</li>
              <li>お客様からのお問い合わせについて、当社の関連部門および関係会社から回答させていただくことが適切と判断される場合</li>
            </ul>
          </li>
          <li style={{ marginTop: 12 }}>
            <strong>3. お客様の個人情報の利用について</strong>
            <p>あらかじめお客様に明示させていただきました目的の範囲内での利用に限定いたします。ただし、あらかじめお客様の同意をいただいた場合については、この限りではありません。</p>
          </li>
          <li style={{ marginTop: 12 }}>
            <strong>4. 取り扱いの見直しについて</strong>
            <p>当社はお客様の個人情報の保護に関する法令等を遵守すると共に、その取り扱いにつきましては、適宜その見直しと改善に努めます。</p>
          </li>
          <li style={{ marginTop: 12 }}>
            <strong>5. お問い合わせ先</strong>
            <p>
              本件に関する当社のお問い合わせ先は以下の通りです。<br />〒464-0821<br />愛知県名古屋市千種区末盛通１丁目18番地１　覚王ハイツ202号<br />℡ 052-734-7051 FAX 052-734-8050
            </p>
          </li>
        </ol>

        <footer style={{ marginTop: 28, color: "#64748b" }}>
          Theme: Illdy. © Copyright 2019. Aislesoft Corp. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
};

export default PrivacyPage;
