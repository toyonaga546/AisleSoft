export const StaffingGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
        <div className="backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 border p-6 rounded-[14px] border-solid border-black/10">
          <div className="items-center bg-[linear-gradient(to_right_bottom,rgb(30,115,190)_0%,oklch(0.546_0.245_262.881)_100%)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 mb-4 mx-auto rounded-[10px]">
            <img
              src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-28.svg"
              alt="Icon"
              className="text-white box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </div>
          <h3 className="text-sky-600 font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
            技術者派遣
          </h3>
          <p className="text-gray-500 box-border caret-transparent leading-[26px] outline-[oklab(0.708_0_0_/_0.5)]">
            優秀な技術者をお客様の現場に派遣いたします
          </p>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
        <div className="backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 border p-6 rounded-[14px] border-solid border-black/10">
          <div className="items-center bg-[linear-gradient(to_right_bottom,rgb(30,115,190)_0%,oklch(0.546_0.245_262.881)_100%)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 mb-4 mx-auto rounded-[10px]">
            <img
              src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-21.svg"
              alt="Icon"
              className="text-white box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </div>
          <h3 className="text-sky-600 font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
            時短労働者派遣
          </h3>
          <p className="text-gray-500 box-border caret-transparent leading-[26px] outline-[oklab(0.708_0_0_/_0.5)]">
            柔軟な働き方でライフワークバランスを実現
          </p>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
        <div className="backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 border p-6 rounded-[14px] border-solid border-black/10">
          <div className="items-center bg-[linear-gradient(to_right_bottom,rgb(30,115,190)_0%,oklch(0.546_0.245_262.881)_100%)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 mb-4 mx-auto rounded-[10px]">
            <img
              src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-29.svg"
              alt="Icon"
              className="text-white box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </div>
          <h3 className="text-sky-600 font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
            リモートワーク労働者派遣
          </h3>
          <p className="text-gray-500 box-border caret-transparent leading-[26px] outline-[oklab(0.708_0_0_/_0.5)]">
            場所にとらわれない新しい働き方をサポート
          </p>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
        <div className="backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 border p-6 rounded-[14px] border-solid border-black/10">
          <div className="items-center bg-[linear-gradient(to_right_bottom,rgb(30,115,190)_0%,oklch(0.546_0.245_262.881)_100%)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 mb-4 mx-auto rounded-[10px]">
            <img
              src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-30.svg"
              alt="Icon"
              className="text-white box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </div>
          <h3 className="text-sky-600 font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
            障がい者派遣
          </h3>
          <p className="text-gray-500 box-border caret-transparent leading-[26px] outline-[oklab(0.708_0_0_/_0.5)]">
            多様な人材が活躍できる環境づくりを支援
          </p>
        </div>
      </div>
    </div>
  );
};
