import Button from "../button";

function Hero() {
  return (
    <section id="top" className=" z-100 bg-[#090A0E] h-screen  ">
      <div className="max-w-[1400px] mx-auto relative h-full hero-front">
        <div className="absolute left-0 z-40 top-50">
          <img src="/hero-icon-left.png" alt="snace left" />
        </div>
        <div className="absolute right-0 z-40 bottom-0">
          <img src="/hero-icon-right.png" alt="snace left" />
        </div>
        <div className="max-w-[705px] mx-auto pt-60 flex items-center flex-col relative z-40">
          <h1 className="text-[#F5F9FF] text-[35px] min-[400px]:text-[40px] min-[600px]:text-[50px] min-[800px]:text-[64px] font-semibold leading-[100%] text-center mb-5">
            Upgrade your tradings <br /> with{" "}
            <span className="text-radial">Predictive AI</span>
          </h1>
          <p className="max-w-[400px] mx-auto text-[#6C7492] leading-7 text-[20px] font-normal text-center mb-12">
            Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
            nisl sed varius
          </p>
          <Button className={"text-center mx-auto"}>Join Waitlist</Button>
        </div>
        {/* <div className="absolute -bottom-125 z-10 "></div> */}
        {/* <div className="absolute -bottom-200 md:-bottom-230 hero-back"></div> */}
      </div>
    </section>
  );
}

export default Hero;
