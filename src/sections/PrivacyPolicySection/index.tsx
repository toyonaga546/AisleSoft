import { SectionHeader } from "@/components/SectionHeader";

export const PrivacyPolicySection = () => {
  return (
    <section id="privacy" className="scroll-mt-16 bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <SectionHeader
          title="プライバシーポリシー"
          description="当社の個人情報保護に関する基本方針と公表事項"
          variant="mb-12"
        />

        <div className="bg-white/60 p-6 rounded-lg shadow-sm text-gray-700">
          <p className="mb-4">
            株式会社アイルソフト（以下「当社」といいます）は、当社のプライバシーポリシーとして、以下の個人情報保護に対する基本方針及び個人情報に関する公表事項を定め、公開いたします。
          </p>

          <h4 className="font-semibold mt-4 mb-2">個人情報保護に対する基本方針</h4>
          <p className="mb-4">株式会社アイルソフトは、当社の「品質方針」に掲げる考えのもと、「業務分析およびソフトウェア開発・保守」事業を行っています。当社が事業活動を行う上で、個人情報を適切に取り扱うことは社会的責務であると考えています。当社では、この責務を全うするために、以下の取り組みを実施します。</p>

          <h5 className="font-semibold mt-4 mb-2">1. 個人情報の取り扱いについて</h5>
          <p className="mb-4">当社は、お客様の会社名、お名前、ご住所、ご連絡先の電話番号、メールアドレスなどの個人情報は、不正なアクセスや紛失、改ざん、漏洩などのないように、適切に管理させていただきます。</p>

          <h5 className="font-semibold mt-4 mb-2">2. 個人情報の管理について</h5>
          <p className="mb-4">当社は、お客様からご提供いただきました個人情報を適切に管理し、以下の何れかに該当する場合を除き、いかなる第三者にも開示いたしません。</p>
          <ul className="list-disc list-inside mb-4">
            <li>お客様の同意がある場合</li>
            <li>お客様からのお問い合わせについて、当社の関連部門および関係会社から回答させていただくことが適切と判断される場合</li>
          </ul>

          <h5 className="font-semibold mt-4 mb-2">3. お客様の個人情報の利用について</h5>
          <p className="mb-4">あらかじめお客様に明示させていただきました目的の範囲内での利用に限定いたします。ただし、あらかじめお客様の同意をいただいた場合については、この限りではありません。</p>

          <h5 className="font-semibold mt-4 mb-2">4. 取り扱いの見直しについて</h5>
          <p className="mb-4">当社はお客様の個人情報の保護に関する法令等を遵守すると共に、その取り扱いにつきましては、適宜その見直しと改善に努めます。</p>

          <h5 className="font-semibold mt-4 mb-2">5. お問い合わせ先</h5>
          <p className="mb-2">本件に関する当社のお問い合わせ先は以下の通りです。</p>
          <address className="not-italic mb-4">
            〒464-0821<br />
            愛知県名古屋市千種区末盛通１丁目18番地１　覚王ハイツ202号<br />
            ℡ 052-734-7051 FAX 052-734-8050
          </address>

          <p className="text-sm text-gray-500 mt-6">Theme: Illdy. © Copyright 2019. Aislesoft Corp. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
