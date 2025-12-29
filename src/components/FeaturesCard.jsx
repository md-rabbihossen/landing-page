export default function FeaturesCard() {
  return (
    <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
      {/* Card 1 */}
      <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
        <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
          Plan your schedules
        </div>
        <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
          Streamline customer subscriptions and billing with automated
          scheduling tools.
        </div>
        {/* Added image for Plan your schedules card */}
        <img
          src="/assets/images/services/plan-your-schedules.jpeg"
          alt="Plan schedules dashboard"
          className="w-full h-40 object-cover rounded-md mt-3"
        />
      </div>
      {/* Card 2 */}
      <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
        <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
          Analytics &amp; insights
        </div>
        <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
          Transform your business data into actionable insights with real-time
          analytics.
        </div>
        {/* Added analytics dashboard image */}
        <img
          src="/assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg"
          alt="Analytics dashboard"
          className="w-full h-40 object-cover rounded-md mt-3"
        />
      </div>
      {/* Card 3 */}
      <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative last:border-b-0 border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
        <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
          Collaborate seamlessly
        </div>
        <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
          Keep your team aligned with shared dashboards and collaborative
          workflows.
        </div>
        {/* Added data visualization image */}
        <img
          src="/assets/images/services/data-visualization-dashboard-with-interactive-char.jpg"
          alt="Data visualization dashboard"
          className="w-full h-40 object-cover rounded-md mt-3"
        />
      </div>
    </div>
  );
}
