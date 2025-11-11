import { SectionHeader } from "@/components/SectionHeader";
import { StaffingGrid } from "@/sections/StaffingSection/components/StaffingGrid";
import { StaffingCTA } from "@/sections/StaffingSection/components/StaffingCTA";

export const StaffingSection = () => {
  return (
  <section id="staffing" className="scroll-mt-16 bg-[linear-gradient(to_right_bottom,oklch(0.97_0.014_254.604)_0%,oklch(0.962_0.018_272.314)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <SectionHeader
          title="人材派遣"
          badge="派23-303066"
          description={
            <>
              弊社ではお客様のニーズに適した優秀な技術者、時短労働者、リモートワーク労働者、障がい者などを
              <br />
              お客様の現場に派遣しております。
            </>
          }
          variant="mb-16"
        />
        <StaffingGrid />
        <StaffingCTA />
      </div>
    </section>
  );
};
