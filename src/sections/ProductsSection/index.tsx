import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/sections/ProductsSection/components/ProductCard";

export const ProductsSection = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
  <section id="products" className="scroll-mt-16 bg-[linear-gradient(to_right_bottom,oklch(0.979_0.021_166.113)_0%,oklch(0.984_0.014_180.72)_50%,oklch(0.982_0.018_155.826)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <SectionHeader
          title="製品ラインナップ"
          description="弊社では、製造業向け製品、プリザンター、勤怠システムなどの製品をご用意しております。 お客様の業務効率化とデジタル変革を支援する、信頼性の高いソリューションをご提供いたします。"
          variant="mb-16"
        />
        <div className="box-border caret-transparent max-w-4xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
          {/* local state to control which product detail is open */}
          {/* only one detail panel implemented for '製造業向け製品' as requested */}
          <ProductCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-18.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.511_0.262_276.966)_100%)]"
            title="IoTスマートファクトリー"
            description="現場の見える化と迅速な改善を支援"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasTopMargin={true}
            onClick={() => setOpen(open === 'manufacturing' ? null : 'manufacturing')}
            isOpen={open === 'manufacturing'}
          >
            {/* 製造業向け製品の詳細パネル */}
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4 px-4 md:px-6">
                <h4 className="text-sm font-semibold text-sky-600 mb-2">概要</h4>
                <p className="text-gray-700 mb-4">生産管理が曖昧になっていませんか？ 異常状態、稼働率、原価率、品質などを視覚化して管理できます。弊社の IoT スマートファクトリーは安価に導入でき、現場の見える化と迅速な改善を支援します。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">トレーサビリティーシステム</h4>
                <p className="text-gray-700 mb-3">得意先や消費者に安全・安心・高品質な製品を供給するため、製造過程のデータを収集・見える化します。トラブル発生時の原因解析や未然防止、稼働率分析、品質向上につなげます。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">IoT エッジコンピューティング</h4>
                <p className="text-gray-700 mb-2">Node-RED のプログラムがセンサーや PLC からデータを取得し、SSD 上のデータベースに格納します。取得データは MQTT により配信され、データの取りこぼしや遅延を抑えつつ現場で迅速に処理します。エッジサーバーはラインや工場全体のデータを管理し、クラウドでのビッグデータ管理とも連携します。</p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>対応プロトコル: Modbus/TCP, EtherNet/IP, EtherCAT, PROFIBUS, Profinet</li>
                  <li>データ連携: Node-RED, MQTT（軽量メッセージング）</li>
                </ul>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">製造現場・修理工場のモニタリング（見える化）</h4>
                <p className="text-gray-700 mb-3">蓄積データを Node-RED ダッシュボードで表示し、ランプ・数値・グラフでアンドン表示が可能です。現場で容易にカスタマイズでき、よりリアルタイムに状況を把握できます。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">AI の活用</h4>
                <p className="text-gray-700 mb-4">蓄積データを用いて AI による不良品検出やフィードバック制御を行い、不良の未然防止や自動化に貢献します。エッジでの推論により迅速なフィードバックが可能です。</p>

                {/* 導入効果セクションは表示しない仕様に変更 */}
              </div>
            </div>
          </ProductCard>
          <ProductCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-21.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.723_0.219_149.579)_0%,oklch(0.596_0.145_163.225)_100%)]"
            title="プリザンター"
            description="純国産オープンソースの Web データベース。ノンプログラミングで業務を快適に。"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasTopMargin={true}
            onClick={() => setOpen(open === 'puzanter' ? null : 'puzanter')}
            isOpen={open === 'puzanter'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4 px-4 md:px-6">
                <h4 className="text-sm font-semibold text-sky-600 mb-2">概要</h4>
                <p className="text-gray-700 mb-3">プリザンターは純国産のオープンソース Web データベースです。ノンプログラミングで業務アプリを簡単に作成でき、新規開発の約1/3の工数で独自業務アプリの作成が可能です。弊社は認定パートナーとして導入支援・研修・保守・カスタマイズを提供します。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">特徴</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-3">
                  <li>日常業務で使える軽快さ（Web アプリとは思えない動作）</li>
                  <li>ドラッグ＆ドロップで作れる豊富なカスタマイズ</li>
                  <li>多彩な表示形式とテンプレート（顧客管理・営業支援・プロジェクト管理等）</li>
                </ul>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">弊社の対応</h4>
                <p className="text-gray-700 mb-3">導入設定、マニュアル作成、導入研修、保守、カスタマイズまで一気通貫で支援します。テレワーク環境への適用や業務の Web 化にも最適です。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">連携</h4>
                <p className="text-gray-700 mb-3">Chatwork と連携してグループチャットやタスク連携が可能。スマホ/タブレット向けには Flutter2 アプリとの連携や、IoT のセンサデータ可視化にも利用できます。</p>
              </div>
            </div>
          </ProductCard>
          <ProductCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-22.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.627_0.265_303.9)_0%,oklch(0.541_0.281_293.009)_100%)]"
            title="ECサイト制作"
            description="EC-CUBE を採用したネットショップ構築で売上アップを支援"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasTopMargin={true}
            onClick={() => setOpen(open === 'ec' ? null : 'ec')}
            isOpen={open === 'ec'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4 px-4 md:px-6">
                <h4 className="text-sm font-semibold text-sky-600 mb-2">概要</h4>
                <p className="text-gray-700 mb-3">EC サイトを導入してインターネットで商品販売を開始できます。弊社は EC-CUBE を採用し、機能豊富で携帯キャリア対応の高機能ネットショップ構築を提供します。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">こんな方におすすめ</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-3">
                  <li>独自ドメインでネットショップに移行したい方</li>
                  <li>高機能なネットショップを簡単に開設したい方</li>
                  <li>決済機能付きにしたい、管理作業を簡素化したい方</li>
                </ul>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">プリザンター連携</h4>
                <p className="text-gray-700 mb-3">EC-CUBE とプリザンターを連携し、顧客・商品・入金情報を取り込み、柔軟な情報共有・業務利用が可能です。</p>
              </div>
            </div>
          </ProductCard>
          <ProductCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-24.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.577_0.245_27.325)_100%)]"
            title="kintone"
            description="ノンプログラミングで業務アプリを作成できる kintone と連携"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasTopMargin={true}
            onClick={() => setOpen(open === 'custom' ? null : 'custom')}
            isOpen={open === 'custom'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4 px-4 md:px-6">
                <h4 className="text-sm font-semibold text-sky-600 mb-2">kintone で業務アプリ制作</h4>
                <p className="text-gray-700 mb-3">kintone を使えばノンプログラミングで業務アプリが作成可能です。案件管理・進捗管理・日報などを短時間で整備し、社内外で情報共有が可能になります。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">連携・ソリューション</h4>
                <p className="text-gray-700 mb-3">弊社は kintone とプリザンター、EC-CUBE、Chatwork を組み合わせた最適なソリューションを提供します。グループチャットやタスク連携、ファイル共有などでテレワーク環境も強化します。</p>
              </div>
            </div>
          </ProductCard>
          <ProductCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-27.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.65_0.22_200)_0%,oklch(0.55_0.18_220)_100%)]"
            title="ISAMS（ICカード式セキュリティ・勤怠管理）"
            description="工事不要の後付けで入退室管理と勤怠管理を同時に実現するシステム"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasTopMargin={true}
            onClick={() => setOpen(open === 'isams' ? null : 'isams')}
            isOpen={open === 'isams'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4 px-4 md:px-6">
                <h4 className="text-sm font-semibold text-sky-600 mb-2">概要</h4>
                <p className="text-gray-700 mb-3">ISAMS（アイサムス）は、工事不要の後付けで IC カードにより入退室管理（セキュリティ）と勤怠管理を同時に行えるシステムです。出退勤打刻、日報、休暇申請、時間管理など業務に必要な機能を統合します。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">主な機能</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-3">
                  <li>入退室管理と出退勤打刻の同時運用</li>
                  <li>日報報告、休暇申請、時間管理のワークフロー</li>
                  <li>ダブルロック対応で高セキュリティ運用が可能</li>
                </ul>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">対応メディア</h4>
                <p className="text-gray-700 mb-3">交通系 IC（例: マナカ）、WAON、nanaco、そしておサイフケータイなどの各種 IC カードに対応しています。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">メリット</h4>
                <p className="text-gray-700 mb-3">社員証を忘れて入室できない、退勤打刻を忘れるといった運用上のムダや手間を削減します。テレワークやシフトの導入が進む企業でも、入退室と勤怠を一元管理できるため運用が簡素化されます。</p>

                <h4 className="text-sm font-semibold text-sky-600 mb-2">導入時の留意点</h4>
                <p className="text-gray-700 mb-3">PC（Windows）と FeliCa リーダー、必要に応じて SESAME 等の連携機器を使用します。既存の運用ルールに合わせたカスタマイズや設定支援も弊社で対応可能です。</p>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>
    </section>
  );
};
