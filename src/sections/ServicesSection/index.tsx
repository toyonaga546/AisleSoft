import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { useState } from "react";

export const ServicesSection = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
  <section id="services" className="scroll-mt-16 bg-[linear-gradient(to_right_bottom,oklch(0.97_0.014_254.604)_0%,oklch(0.977_0.014_308.299)_50%,oklch(0.984_0.019_200.873)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <SectionHeader
          title="受託開発サービス"
          description="組込み、制御、ネットワーク、Windows、Mac、Web、スマートフォンアプリまで、 従来システムからIoT、ロボット、AIまで幅広い受託開発を承ります。"
          variant="mb-16"
        />
        <div className="box-border caret-transparent max-w-4xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
          <ServiceCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-23.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.696_0.17_162.48)_0%,oklch(0.6_0.118_184.704)_100%)]"
            title="組込みソフトウェア"
            description="AGV/AGF、クレーン、PLC、ECU、実装機、自動車用計測機など幅広い組込みシステムの開発"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasMarginBottom={true}
            onClick={() => setOpen(open === 'embedded' ? null : 'embedded')}
            isOpen={open === 'embedded'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-sky-600 mb-3">詳細サービス</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>AGV/AGF制御 - 自動搬送車、無人フォークリフトの制御システム</li>
                  <li>PLC開発 - 三菱、オムロン、キーエンス対応のラダープログラム</li>
                  <li>ECUソフト - 自動車組込み制御ユニットソフトウェア</li>
                  <li>計測機システム - 自動車用テストベンチ、検査装置システム</li>
                  <li>デバイスドライバ - Linux、RTOS対応の低レベルドライバ開発</li>
                </ul>
                <hr className="border-t border-gray-200 my-4" />
                <h4 className="text-sm font-semibold text-sky-600 mb-2">導入効果</h4>
                <p className="text-gray-700">（組込みソフトウェアの適用により、機器制御の信頼性向上と迅速な立ち上げを実現）</p>
              </div>
            </div>
          </ServiceCard>
          <ServiceCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-24.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.627_0.265_303.9)_0%,oklch(0.511_0.262_276.966)_100%)]"
            title="制御システム"
            description="IoTスマートファクトリー、設備稼働率モニタ、トレーサビリティシステムなどの産業制御システム"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasMarginBottom={true}
            onClick={() => setOpen(open === 'control' ? null : 'control')}
            isOpen={open === 'control'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-sky-600 mb-3">詳細サービス</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>IoTスマートファクトリー - センサーデータ収集、リアルタイム制御</li>
                  <li>設備稼働率モニタ - 稼働状況可視化、予知保全システム</li>
                  <li>トレーサビリティ - 製品履歴管理、品質追跡システム</li>
                  <li>HTML5アンドン - Webベース現場表示システム、異常通知</li>
                </ul>
                <hr className="border-t border-gray-200 my-4" />
                <h4 className="text-sm font-semibold text-sky-600 mb-2">導入効果</h4>
                <p className="text-gray-700">（生産ラインの可視化と制御の一元化により、稼働率向上と早期異常検知を実現）</p>
              </div>
            </div>
          </ServiceCard>
          <ServiceCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-25.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.715_0.143_215.221)_0%,oklch(0.546_0.245_262.881)_100%)]"
            title="ネットワークシステム"
            description="産業用イーサネット、Modbus/TCP、EtherCAT、IoT/MQTT、BLE/NFCなどの通信システム"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasMarginBottom={true}
            onClick={() => setOpen(open === 'network' ? null : 'network')}
            isOpen={open === 'network'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-sky-600 mb-3">詳細サービス</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>産業用イーサネット - CC-Link IE、PROFINET対応システム</li>
                  <li>Modbus/TCP - 産業機器間通信プロトコル実装</li>
                  <li>EtherCAT - リアルタイム通信システム、マスター・スレーブ開発</li>
                  <li>IoT/MQTT - クラウド連携、リモート監視システム</li>
                  <li>BLE/NFC - 近距離無線通信、スマートデバイス連携</li>
                </ul>
                <hr className="border-t border-gray-200 my-4" />
                <h4 className="text-sm font-semibold text-sky-600 mb-2">導入効果</h4>
                <p className="text-gray-700">（堅牢で低遅延なネットワーク基盤により、安定した設備通信と遠隔監視を実現）</p>
              </div>
            </div>
          </ServiceCard>
          <ServiceCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-20.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.577_0.245_27.325)_100%)]"
            title="Windows・Mac・Webシステム"
            description="地図ルート検索、プログラム自動生成、部品調達・入出庫・部品表管理システムなど"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasMarginBottom={true}
            onClick={() => setOpen(open === 'winweb' ? null : 'winweb')}
            isOpen={open === 'winweb'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-sky-600 mb-3">詳細サービス</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>地図ルート検索 - GPS連携、最適経路算出アプリケーション</li>
                  <li>自動生成システム - コード生成、設定ファイル自動作成ツール</li>
                  <li>部品調達 - サプライヤー管理、発注自動化システム</li>
                  <li>入出庫管理 - バーコード/QRコード、在庫最適化</li>
                  <li>部品表管理 - BOM管理、変更履歴、コスト計算システム</li>
                </ul>
                <hr className="border-t border-gray-200 my-4" />
                <h4 className="text-sm font-semibold text-sky-600 mb-2">導入効果</h4>
                <p className="text-gray-700">（業務可視化と自動化により、運用効率と精度を向上）</p>
              </div>
            </div>
          </ServiceCard>
          <ServiceCard
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-26.svg"
            iconVariant="bg-[linear-gradient(to_right_bottom,oklch(0.656_0.241_354.308)_0%,oklch(0.586_0.253_17.585)_100%)]"
            title="スマートフォンアプリ"
            description="Monacaプラットフォーム、Beacon、BLE/NFC、地図アプリなどモバイルアプリケーション開発"
            arrowIconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-19.svg"
            hasMarginBottom={true}
            onClick={() => setOpen(open === 'mobile' ? null : 'mobile')}
            isOpen={open === 'mobile'}
          >
            <div className="bg-[linear-gradient(to_right_bottom,rgba(14,165,233,0.03),rgba(59,130,246,0.02))] rounded-b-[10px]">
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-sky-600 mb-3">詳細サービス</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>Monacaアプリ - クロスプラットフォーム、ハイブリッドアプリ開発</li>
                  <li>Beaconアプリ - 位置情報サービス、近接通知システム</li>
                  <li>BLE/NFCアプリ - IoTデバイス連携、非接触決済対応</li>
                  <li>地図アプリ - GPS追跡、ナビゲーション機能</li>
                  <li>業務アプリ - 現場作業支援、データ収集アプリ</li>
                </ul>
                <hr className="border-t border-gray-200 my-4" />
                <h4 className="text-sm font-semibold text-sky-600 mb-2">導入効果</h4>
                <p className="text-gray-700">（現場業務のモバイル化と効率化を支援）</p>
              </div>
            </div>
          </ServiceCard>
          {/* '総合システム開発' カードは要望により削除済み */}
        </div>
      </div>
    </section>
  );
};
