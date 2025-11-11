import { PhilosophyGrid } from "@/sections/PhilosophySection/components/PhilosophyGrid";

export const PhilosophySection = () => {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,oklch(0.962_0.018_272.314)_0%,oklch(0.977_0.014_308.299)_50%,oklch(0.971_0.014_343.198)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-12">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center mb-8">
          <h2 className="text-sky-600 text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.708_0_0_/_0.5)] mb-3 md:text-3xl md:leading-9">
            企業理念
          </h2>
          <p className="text-gray-500 box-border caret-transparent max-w-2xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
            創見・共創・共働・共育の理念のもと、お客様と共により良い未来を築きます。
          </p>
        </div>
        <PhilosophyGrid />
      </div>
    </section>
  );
};
