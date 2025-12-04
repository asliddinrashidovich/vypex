function Upgrade() {
  return (
    <section className="px-5 z-100 mb-40">
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-5">
          Upgrade your tradings with{" "}
          <span className="text-radial">Predictive AI</span>
        </h2>
        <p className="max-w-[405px] mx-auto text-[#6C7492] leading-7 text-[17px] md:text-[20px] font-normal text-center mb-20">
          Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
          nisl sed varius
        </p>
        <div className="flex flex-row max-[1000px]:flex-col gap-6 justify-between mb-20">
          <div className="dark-card rounded-[40px] p-4 md:px-6 md:py-8">
            <div className="w-full flex justify-center mx-auto min-[400px]:w-[300px] h-[300px] ">
              <img
                src="/home/upgrade-card-1.png"
                className="object-cover object-top  h-full"
                alt="upgrade card 1"
              />
            </div>
            <h3 className="text-white text-center text-[38px] font-semibold leading-[46px] mb-8">
              AI Powered Predictive Analytics
            </h3>
            <p className="text-[#6C7492] leading-7 text-[20px] font-normal text-center">
              Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices
              ac nisl sed varius
            </p>
          </div>
          <div className="relative light-card rounded-[40px] p-4 md:px-6 md:py-8">
            <div className="relative z-40">
              <div className="w-full flex justify-center mx-auto min-[400px]:w-[300px] h-[300px]">
                <img
                  src="/home/upgrade-card-2.png"
                  className="object-cover object-top  h-full"
                  alt="upgrade card 1"
                />
              </div>
              <h3 className="text-[#090A0E] text-center text-[38px] font-semibold leading-[46px] mb-8">
                Financial Market Modelling
              </h3>
              <p className="text-[#6C7492] leading-7 text-[20px] font-normal text-center">
                Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices
                ac nisl sed varius
              </p>
            </div>
            <img
              className="absolute bottom-0.5 left-0.5 right-0.5 top-0.5 w-full h-full z-20"
              src="/home/upgrade-card-bg-2.png"
              alt="bg"
            />
            <img
              className="absolute bottom-0.5 left-0.5 right-0.5 top-0.5 w-full h-full z-10"
              src="/home/upgrade-card-bg-21.png"
              alt="bg"
            />
          </div>
          <div className="dark-card rounded-[40px] p-4 md:px-6 md:py-8">
            <div className="w-full flex justify-center mx-auto min-[400px]:w-[300px] h-[300px]">
              <img
                className="object-cover object-top  h-full"
                src="/home/upgrade-card-3.png"
                alt="upgrade card 1"
              />
            </div>
            <h3 className="text-white text-center text-[38px] font-semibold leading-[46px] mb-8">
              AI Powered Predictive Analytics
            </h3>
            <p className="text-[#6C7492] leading-7 text-[20px] font-normal text-center">
              Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices
              ac nisl sed varius
            </p>
          </div>
        </div>
        <img src="/home/statistiks.png" className="w-full" alt="statistics" />
      </div>
    </section>
  );
}

export default Upgrade;
