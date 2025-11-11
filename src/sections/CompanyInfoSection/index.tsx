import { SectionHeader } from "@/components/SectionHeader";
import { CompanyDetails } from "@/sections/CompanyInfoSection/components/CompanyDetails";

export const CompanyInfoSection = () => {
  return (
  <section id="company-info" className="scroll-mt-16 bg-[linear-gradient(to_right_bottom,oklch(0.984_0.003_247.858)_0%,oklch(0.97_0.014_254.604)_50%,oklch(0.962_0.018_272.314)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <SectionHeader
          title="企業情報"
          description="アイルソフトの基本情報をご紹介いたします"
          variant="mb-16"
        />
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="backdrop-blur bg-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent gap-x-6 flex flex-col max-w-screen-lg outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 border-[oklab(0.545613_-0.0473512_-0.132002_/_0.2)] mx-auto rounded-[14px] border-2 border-solid">
            <CompanyDetails />
          </div>
        </div>
      </div>
    </section>
  );
};
