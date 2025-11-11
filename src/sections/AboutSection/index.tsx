import { SectionHeader } from "@/components/SectionHeader";
import { BusinessChart } from "@/sections/AboutSection/components/BusinessChart";

export const AboutSection = () => {
  return (
  <section id="about" className="scroll-mt-16 bg-[linear-gradient(to_right_bottom,oklch(0.97_0.014_254.604)_0%,rgb(255,255,255)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-16">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <SectionHeader
          title="アイルソフトについて"
          description={
            <>
              アイルソフトは情報システム会社です。
              <br />
              主にノンプログラミング、ネットワーク、製造業に特化しています。
              <br />
              業務、ネットワーク、組込み、制御のソフトウェアの知識を用いて
              <br />
              要求分析、設計、開発、テストを行います。
            </>
          }
          iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-3.svg"
          variant="mb-12"
        />
        <BusinessChart />
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mt-20">
          <SectionHeader
            title="IoT技術で工場を変革"
            description="IoT技術を工場全体に導入し、生産効率、品質、柔軟性を飛躍的に向上させます"
            iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-7.svg"
            variant="mb-12"
          />
          <div className="box-border caret-transparent max-w-6xl outline-[oklab(0.708_0_0_/_0.5)] mb-12 mx-auto">
            <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 overflow-hidden rounded-[14px]">
              <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-8 pb-6 px-8">
                <div className="items-center box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 md:grid-cols-[repeat(5,minmax(0px,1fr))]">
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
                    <div className="items-center bg-[oklch(0.967_0.003_264.542)] box-border caret-transparent flex h-20 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-20 mb-3 mx-auto rounded-[3.35544e+07px]">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-8.svg"
                        alt="Icon"
                        className="text-[oklch(0.551_0.027_264.364)] box-border caret-transparent h-10 outline-[oklab(0.708_0_0_/_0.5)] w-10"
                      />
                    </div>
                    <h4 className="text-[oklch(0.373_0.034_259.733)] font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      従来の工場
                    </h4>
                    <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                      手作業での
                      <br className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]" />
                      データ収集
                    </p>
                  </div>
                  <div className="box-border caret-transparent hidden justify-center min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:flex md:min-h-[auto] md:min-w-[auto]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-9.svg"
                      alt="Icon"
                      className="text-sky-600 box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                    />
                  </div>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
                    <div className="relative items-center bg-[oklch(0.932_0.032_255.585)] box-border caret-transparent flex h-20 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-20 mb-3 mx-auto rounded-[3.35544e+07px]">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-10.svg"
                        alt="Icon"
                        className="text-sky-600 box-border caret-transparent h-10 outline-[oklab(0.708_0_0_/_0.5)] w-10"
                      />
                      <div className="absolute bg-sky-600 box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4 rounded-[3.35544e+07px] -right-1 -top-1"></div>
                      <div className="absolute bg-sky-600 box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4 rounded-[3.35544e+07px] -right-1 -top-1"></div>
                    </div>
                    <h4 className="text-sky-600 font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      IoT技術導入
                    </h4>
                    <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                      センサーと
                      <br className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]" />
                      ネットワーク
                    </p>
                  </div>
                  <div className="box-border caret-transparent hidden justify-center min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:flex md:min-h-[auto] md:min-w-[auto]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-9.svg"
                      alt="Icon"
                      className="text-sky-600 box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                    />
                  </div>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
                    <div className="items-center bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex h-20 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-20 mb-3 mx-auto rounded-[3.35544e+07px]">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-11.svg"
                        alt="Icon"
                        className="text-white box-border caret-transparent h-10 outline-[oklab(0.708_0_0_/_0.5)] w-10"
                      />
                    </div>
                    <h4 className="text-sky-600 font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      スマート工場
                    </h4>
                    <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                      リアルタイム
                      <br className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]" />
                      最適化
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-6xl outline-[oklab(0.708_0_0_/_0.5)] gap-y-8 mx-auto md:grid-cols-[repeat(3,minmax(0px,1fr))]">
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col h-full outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px]">
                <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center p-6">
                  <div className="items-center bg-[linear-gradient(to_right_bottom,oklch(0.765_0.177_163.223)_0%,oklch(0.596_0.145_163.225)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex h-16 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-16 mb-4 mx-auto rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-12.svg"
                      alt="Icon"
                      className="text-white box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                    />
                  </div>
                  <h3 className="text-sky-600 text-xl font-semibold box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                    生産効率の向上
                  </h3>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-left">
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-13.svg"
                        alt="Icon"
                        className="text-[oklch(0.696_0.17_162.48)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        リアルタイムでの生産状況の可視化
                      </p>
                    </div>
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-13.svg"
                        alt="Icon"
                        className="text-[oklch(0.696_0.17_162.48)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        設備稼働率の最大化
                      </p>
                    </div>
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-13.svg"
                        alt="Icon"
                        className="text-[oklch(0.696_0.17_162.48)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        ダウンタイムの削減
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col h-full outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px]">
                <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center p-6">
                  <div className="items-center bg-[linear-gradient(to_right_bottom,oklch(0.707_0.165_254.624)_0%,oklch(0.546_0.245_262.881)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex h-16 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-16 mb-4 mx-auto rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-14.svg"
                      alt="Icon"
                      className="text-white box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                    />
                  </div>
                  <h3 className="text-sky-600 text-xl font-semibold box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                    品質の向上
                  </h3>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-left">
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-15.svg"
                        alt="Icon"
                        className="text-[oklch(0.623_0.214_259.815)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        品質データの自動収集と分析
                      </p>
                    </div>
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-15.svg"
                        alt="Icon"
                        className="text-[oklch(0.623_0.214_259.815)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        不良品の早期検出
                      </p>
                    </div>
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-15.svg"
                        alt="Icon"
                        className="text-[oklch(0.623_0.214_259.815)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        トレーサビリティの確保
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col h-full outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px]">
                <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center p-6">
                  <div className="items-center bg-[linear-gradient(to_right_bottom,oklch(0.714_0.203_305.504)_0%,oklch(0.558_0.288_302.321)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex h-16 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-16 mb-4 mx-auto rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-16.svg"
                      alt="Icon"
                      className="text-white box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                    />
                  </div>
                  <h3 className="text-sky-600 text-xl font-semibold box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                    柔軟性の向上
                  </h3>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-left">
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-17.svg"
                        alt="Icon"
                        className="text-[oklch(0.627_0.265_303.9)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        生産計画の迅速な変更対応
                      </p>
                    </div>
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] mb-2">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-17.svg"
                        alt="Icon"
                        className="text-[oklch(0.627_0.265_303.9)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        多品種少量生産への対応
                      </p>
                    </div>
                    <div className="items-start box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
                      <img
                        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-17.svg"
                        alt="Icon"
                        className="text-[oklch(0.627_0.265_303.9)] box-border caret-transparent shrink-0 h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 mr-2 mt-0.5"
                      />
                      <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                        リモート監視・制御
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
