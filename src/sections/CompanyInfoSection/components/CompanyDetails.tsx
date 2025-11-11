export const CompanyDetails = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-8 pb-10 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* 企業理念（削除済み） */}

        {/* 社是 */}
        <section className="mb-8">
          <h3 id="company-philosophy" className="text-sky-600 text-2xl font-semibold mb-4 scroll-mt-16">社是</h3>
          <p className="bg-white/60 p-8 rounded-lg text-sky-600 text-center text-xl md:text-2xl font-semibold tracking-wide">共に学び　共に創り　共に育つ</p>
        </section>

        {/* 会社概要 */}
        <section className="mb-8">
          <h3 id="company-overview" className="text-sky-600 text-2xl font-semibold mb-4 scroll-mt-16">会社概要</h3>
          <div className="bg-white/60 p-6 rounded-lg">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
              <div>
                <dt className="font-medium">会社名</dt>
                <dd>株式会社アイルソフト</dd>
              </div>
              <div>
                <dt className="font-medium">所在地</dt>
                <dd>愛知県名古屋市千種区末盛通1丁目18番地1 覚王ハイツ202号</dd>
              </div>
              <div>
                <dt className="font-medium">電話</dt>
                <dd>052-734-7051</dd>
              </div>
              <div>
                <dt className="font-medium">FAX</dt>
                <dd>052-734-8050</dd>
              </div>
              <div>
                <dt className="font-medium">設立</dt>
                <dd>2003年5月</dd>
              </div>
              <div>
                <dt className="font-medium">資本金</dt>
                <dd>1,000万円</dd>
              </div>
              <div>
                <dt className="font-medium">取引銀行</dt>
                <dd>三菱UFJ銀行 / 中日信用金庫</dd>
              </div>
              <div>
                <dt className="font-medium">労働者派遣</dt>
                <dd>派23-303066</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 沿革 */}
        <section className="mb-8">
          <h3 className="text-sky-600 text-2xl font-semibold mb-4">沿革</h3>
          <div className="bg-white/60 p-6 rounded-lg text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>2003年5月　千種区今池南29番10号 川崎第二ビル201　資本金300万にて設立</li>
              <li>2007年5月　千種区今池南29番16号 川崎第五ビル３Ⅾに移転</li>
              <li>2007年6月　特定労働派遣事業開始　(特)23-302251</li>
              <li>2009年12月　中部アイティ共同組合に加入</li>
              <li>2017年12月　現在のオフィスに移転</li>
              <li>2018年1月　プログラミング教室を子会社として設立</li>
              <li>2018年12月　労働派遣事業許可　(派)23-303066</li>
            </ul>
          </div>
        </section>

        {/* 新着情報 */}
        <section className="mb-8">
          <h3 className="text-sky-600 text-2xl font-semibold mb-4">新着情報</h3>
          <div className="bg-white/60 p-6 rounded-lg text-gray-700">
            <p className="mb-2">2018年12月　代表取締役 市川満之がITマスターとして認定</p>
          </div>
        </section>

        {/* 開発実績 */}
        <section className="mb-8">
          <h3 className="text-sky-600 text-2xl font-semibold mb-4">開発実績（抜粋）</h3>
          <div className="bg-white/60 p-6 rounded-lg text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>電子部品組立機のアプリケーション</li>
              <li>ロボットのアプリケーション</li>
              <li>物流システム機器の組込みソフトウェア</li>
              <li>PLC内部の改修</li>
              <li>トレーサビリティーデータ収集システム</li>
              <li>工作機械組込みソフトウェア</li>
              <li>自動車用計測システム</li>
              <li>各種デバイスドライバ</li>
              <li>プログラム自動生成システム</li>
              <li>部品調達システム / 補充部品出荷補填システム / 部品表管理システム</li>
            </ul>
          </div>
        </section>

        {/* 技術スタック */}
        <section className="mb-8">
          <h3 className="text-sky-600 text-2xl font-semibold mb-4">技術・開発環境</h3>
          <div className="bg-white/60 p-6 rounded-lg text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">データベース</h4>
                <p>MySQL / SQL Server / Oracle / PostgreSQL 等</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">言語</h4>
                <p>C / C++ / VC / C# (WPF) / C# / VB.Net / ASP.Net / JavaScript / Node.js / Node-RED / PHP / Perl / HTML / Python / Java 等</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">プラットフォーム</h4>
                <p>Linux / マイコン制御 / Windows / iOS / Android / ITRON / Unix / MS-DOS 等</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
