export type ContactFormProps = {
  title?: string;
  submitLabel?: string;
};

export const ContactForm = ({ title = "お問い合わせフォーム", submitLabel = "送信する" }: ContactFormProps) => {
  return (
    <div className="box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 w-full rounded-[14px] border-2 border-solid border-black/10">
        <div className="items-start box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-1.5 pt-6 px-6">
          <h4 className="text-2xl font-medium box-border caret-transparent leading-8 outline-[oklab(0.708_0_0_/_0.5)]">
            {title}
          </h4>
        </div>
        <div className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[oklab(0.708_0_0_/_0.5)] pb-6 px-6">
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
            <label className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              お名前
              <span className="text-[oklch(0.637_0.237_25.331)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] ml-1">
                *
              </span>
            </label>
            <input
              placeholder="山田 太郎"
              className="text-base bg-gray-100 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.708_0_0_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
            />
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
            <label className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              電話番号
              <span className="text-[oklch(0.637_0.237_25.331)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] ml-1">
                *
              </span>
            </label>
            <input
              type="tel"
              placeholder="052-734-7051"
              className="text-base bg-gray-100 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.708_0_0_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
            />
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
            <label className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              メールアドレス
              <span className="text-[oklch(0.637_0.237_25.331)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] ml-1">
                *
              </span>
            </label>
            <input
              type="email"
              placeholder="your-email@example.com"
              className="text-base bg-gray-100 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.708_0_0_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
            />
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
            <label className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              題名
            </label>
            <input
              placeholder="お問い合わせの件名をご入力ください"
              className="text-base bg-gray-100 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.708_0_0_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
            />
          </div>
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[oklab(0.708_0_0_/_0.5)] mb-6">
            <label className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              メッセージ本文
            </label>
            <textarea
              placeholder="お問い合わせ内容の詳細をご記入ください..."
              className="text-base bg-gray-100 box-border caret-transparent flex basis-[0%] grow leading-6 min-h-[150px] outline-[oklab(0.708_0_0_/_0.5)] text-start w-full px-3 py-2 rounded-lg border-transparent md:text-sm md:leading-5"
            ></textarea>
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mt-auto">
            <button className="text-[oklch(1_0_0)] text-sm font-medium items-center bg-sky-600 caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 whitespace-nowrap w-full px-6 py-0 rounded-lg">
              {submitLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
