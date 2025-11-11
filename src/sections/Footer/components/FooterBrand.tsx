export const FooterBrand = () => {
  return (
    <div className="box-border caret-transparent col-end-auto col-start-auto outline-[oklab(0.708_0_0_/_0.5)] md:col-end-[span_1] md:col-start-[span_1]">
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
        {/* use Logo component and render white for dark footer background */}
        <div className="inline-block">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <img
            src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/0231c09d5d0963c29aa540e836610c0b5f608e5d.png"
            alt="AisleSoft"
            className="box-border caret-transparent h-10 max-w-full outline-[oklab(0.708_0_0_/_0.5)] filter brightness-0 invert"
          />
        </div>
      </div>
      <p className="text-[oklab(1_0_0_/_0.8)] box-border caret-transparent leading-[26px] outline-[oklab(0.708_0_0_/_0.5)] mb-4">
        創見・共創・共働・共育の理念のもと、革新的なソフトウェア開発と
        デジタルトランスフォーメーションで、お客様のビジネスを次のレベルへ導きます。
      </p>
      <div className="text-[oklab(1_0_0_/_0.6)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-6">
        <div className="box-border caret-transparent gap-x-3 flex flex-wrap outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
          <span className="bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] px-2 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
            創見
          </span>
          <span className="bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] px-2 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
            共創
          </span>
          <span className="bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] px-2 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
            共働
          </span>
          <span className="bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] px-2 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
            共育
          </span>
        </div>
      </div>
      <div className="box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
        <a
          href="#"
          aria-label="GitHub"
          className="items-center bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent flex h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 mr-4 rounded-[10px]"
        >
          <img
            src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-38.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
          />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="items-center bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent flex h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 mr-4 rounded-[10px]"
        >
          <img
            src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-39.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
          />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="items-center bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent flex h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 mr-4 rounded-[10px]"
        >
          <img
            src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-40.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
          />
        </a>
        <a
          href="#"
          aria-label="Email"
          className="items-center bg-[oklab(1_0_0_/_0.1)] box-border caret-transparent flex h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 rounded-[10px]"
        >
          <img
            src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-41.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
          />
        </a>
      </div>
    </div>
  );
};
