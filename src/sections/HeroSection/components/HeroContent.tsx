export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full z-20 mx-auto px-6 md:max-w-screen-xl">
      <div className="text-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
        <div className="box-border caret-transparent flex justify-center outline-[oklab(0.708_0_0_/_0.5)] mb-8">
          <img
            src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/1b41b5d479c41c11b1a8fa5d6407507e948b70f6.png"
            alt="AisleSoft ロゴ"
            className="box-border caret-transparent h-16 max-w-full outline-[oklab(0.708_0_0_/_0.5)]"
          />
        </div>
        <h1 className="text-5xl font-bold box-border caret-transparent leading-[60px] outline-[oklab(0.708_0_0_/_0.5)] mb-6 md:text-7xl md:leading-[90px]">
          <span className="text-[oklch(0.707_0.165_254.624)] text-5xl box-border caret-transparent leading-[60px] outline-[oklab(0.708_0_0_/_0.5)] md:text-7xl md:leading-[90px]">
            IoT
          </span>
          ソリューション
        </h1>
        <p className="text-[oklch(0.928_0.006_264.531)] text-xl box-border caret-transparent leading-7 max-w-4xl outline-[oklab(0.708_0_0_/_0.5)] mb-12 mx-auto md:text-2xl md:leading-8">
          組込み、制御、ネットワーク技術でインダストリー4.0へ
        </p>
        <div className="box-border caret-transparent flex justify-center outline-[oklab(0.708_0_0_/_0.5)]">
          <button className="text-[oklch(1_0_0)] text-lg font-medium items-center bg-sky-600 caret-transparent gap-x-2 flex shrink-0 h-10 justify-center leading-7 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-left whitespace-nowrap p-4 rounded-lg">
            <img
              src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-2.svg"
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none whitespace-nowrap w-4 mr-2"
            />
            資料ダウンロード
          </button>
        </div>
      </div>
    </div>
  );
};
