export const FooterBottom = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-between outline-[oklab(0.708_0_0_/_0.5)] mt-12 pt-8 border-t border-solid border-[oklab(1_0_0_/_0.2)] md:flex-row">
      <p className="text-[oklab(1_0_0_/_0.6)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-4 md:mb-0">
        © 2024 AisleSoft Co., Ltd. All rights reserved.
      </p>
      {/* Bottom links removed per request (プライバシーポリシー / 利用規約 / サイトマップ) */}
    </div>
  );
};
