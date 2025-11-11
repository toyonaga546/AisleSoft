import { SectionHeader } from "@/components/SectionHeader";
import { IoTProcess } from "@/sections/IoTSection/components/IoTProcess";
import { IoTBenefits } from "@/sections/IoTSection/components/IoTBenefits";

export const IoTSection = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mt-20">
      <SectionHeader
        title="IoT技術で工場を変革"
        description="IoT技術を工場全体に導入し、生産効率、品質、柔軟性を飛躍的に向上させます"
        iconUrl="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-7.svg"
        variant="mb-12"
      />
      <div className="box-border caret-transparent max-w-6xl outline-[oklab(0.708_0_0_/_0.5)] mb-12 mx-auto">
        <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 overflow-hidden rounded-[14px]">
          <IoTProcess />
        </div>
      </div>
      <IoTBenefits />
    </div>
  );
};
