import Button from "../button";

function Futures() {
  return (
    <section className="px-5 z-60 mb-30 relative">
      <div className="dark-card relative max-w-[1400px] mx-auto border-2 border-[#0D0E14B2] p-8 md:p-12 rounded-[48px]">
        <div className="max-w-[500px]">
          <h2 className="mb-8 md:mb-[46px] text-radial text-[24px] leading-8 font-medium">
            Our Futures
          </h2>
          <h2 className="mb-8 md:mb-[46px] text-[35px] md:text-[44px] text-[#F5F9FF] font-semibold leading-[120%] md:leading-[58px]">
            All Agents Builts to Think Like Degen Traders
          </h2>
          <div className="flex  items-center gap-4">
            <Button>Join Waitlist</Button>
            <p className="text-[#46494F] hover:text-white duration-200 transition-all font-normal text-[16px] min-[400px]:text-[24px] leading-[100%] cursor-pointer">
              Contact Us
            </p>
          </div>
          <img src="/home/future-right-back.png" alt="" className="w-full min-[1150px]:hidden" />
          <img src="/home/future-right-front.png" alt="" className="min-[700px]:scale-[120%] min-[700px]:ml-10 min-[1150px]:hidden" />
        </div>
        <div className="absolute max-[1150px]:hidden top-[47px] right-15 min-[1300px]:right-22">
          <img src="/home/future-right-back.png" alt="" />
        </div>
        <div className="absolute max-[1150px]:hidden right-15 min-[1300px]:right-35 top-45 min-[1300px]:top-38">
          <img src="/home/future-right-front.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Futures;
