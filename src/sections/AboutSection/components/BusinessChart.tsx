export const BusinessChart = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-6xl outline-[oklab(0.708_0_0_/_0.5)] gap-y-12 mx-auto md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px]">
          <div className="items-start box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-1.5 pt-6 px-6">
            <h4 className="text-sky-600 text-xl box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)] text-center">
              事業内容の割合
            </h4>
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pb-6 px-6">
            <div className="box-border caret-transparent h-80 outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-full">
                {/* Pie chart component */}
                <div className="h-full w-full flex items-center justify-center">
                  {/* render pie chart */}
                  {/* Imported locally to avoid changing external dependencies */}
                  <div className="w-full max-w-[320px] h-full">
                    {/* animate when in view */}
                    <AnimateOnView className="w-full h-full">
                      {/* lazy import via local component */}
                      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                      {/* @ts-ignore */}
                      <PieChartWrapper />
                    </AnimateOnView>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
          <div className="bg-white border-l-sky-600 box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px] border-l-4 border border-black/10 border-b border-r border-t border-solid">
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-6">
              <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
                <div className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
                  <div className="items-center bg-sky-600/10 box-border caret-transparent flex justify-center outline-[oklab(0.708_0_0_/_0.5)] mr-4 p-3 rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-4.svg"
                      alt="Icon"
                      className="text-sky-600 box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
                    />
                  </div>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                    <h3 className="text-sky-600 text-lg font-semibold box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)]">
                      受託開発
                    </h3>
                    <div className="bg-gray-200 box-border caret-transparent h-2 outline-[oklab(0.708_0_0_/_0.5)] w-full mt-2 rounded-[3.35544e+07px]">
                      <div className="bg-sky-600 box-border caret-transparent h-2 outline-[oklab(0.708_0_0_/_0.5)] w-[39%] rounded-[3.35544e+07px]"></div>
                    </div>
                  </div>
                </div>
                <div className="text-sky-600 text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.708_0_0_/_0.5)]">
                  39%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
            <div className="bg-white border-l-blue-500 box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px] border-l-4 border border-black/10 border-b border-r border-t border-solid">
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-6">
              <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
                <div className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
                  <div className="items-center bg-blue-500/10 box-border caret-transparent flex justify-center outline-[oklab(0.708_0_0_/_0.5)] mr-4 p-3 rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-5.svg"
                      alt="Icon"
                      className="text-blue-500 box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
                    />
                  </div>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                    <h3 className="text-sky-600 text-lg font-semibold box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)]">
                      人材派遣
                    </h3>
                    <div className="bg-gray-200 box-border caret-transparent h-2 outline-[oklab(0.708_0_0_/_0.5)] w-full mt-2 rounded-[3.35544e+07px]">
                      <div className="bg-blue-500 box-border caret-transparent h-2 outline-[oklab(0.708_0_0_/_0.5)] w-[33%] rounded-[3.35544e+07px]"></div>
                    </div>
                  </div>
                </div>
                <div className="text-blue-500 text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.708_0_0_/_0.5)]">
                  33%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="bg-white border-l-sky-300 box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px] border-l-4 border border-black/10 border-b border-r border-t border-solid">
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-6">
              <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
                <div className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
                  <div className="items-center bg-sky-300/10 box-border caret-transparent flex justify-center outline-[oklab(0.708_0_0_/_0.5)] mr-4 p-3 rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-6.svg"
                      alt="Icon"
                      className="text-sky-300 box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
                    />
                  </div>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                    <h3 className="text-sky-600 text-lg font-semibold box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)]">
                      製品
                    </h3>
                    <div className="bg-gray-200 box-border caret-transparent h-2 outline-[oklab(0.708_0_0_/_0.5)] w-full mt-2 rounded-[3.35544e+07px]">
                      <div className="bg-sky-300 box-border caret-transparent h-2 outline-[oklab(0.708_0_0_/_0.5)] w-[28%] rounded-[3.35544e+07px]"></div>
                    </div>
                  </div>
                </div>
                <div className="text-sky-300 text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.708_0_0_/_0.5)]">
                  28%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Local lightweight wrapper to avoid circular import issues in generated code
import React from "react";
import PieChart from "@/components/ui/PieChart";
import AnimateOnView from "../../../components/AnimateOnView";

const PieChartWrapper: React.FC = () => {
  const data = [
    { label: "受託開発", value: 39, color: "#0ea5e9" },
    { label: "人材派遣", value: 33, color: "#3b82f6" },
    { label: "製品", value: 28, color: "#7dd3fc" },
  ];
  // render as a full pie (no inner hole)
  return <PieChart data={data} size={320} innerRadius={0} />;
};
