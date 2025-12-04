import Button from "../button";

function HeroPresales() {
  return (
    <section className="presales-hero z-100 bg-[#090A0E] h-screen ">
      <div className="max-w-[1400px] mx-auto h-full ">
        <div className="max-w-[705px] mx-auto flex justify-center flex-col pt-50">
          <h1 className="text-[#F5F9FF] text-[35px] min-[400px]:text-[40px] min-[600px]:text-[50px] min-[800px]:text-[64px] font-semibold leading-[100%]  text-center mb-5">
            Improve Your Portfolio with{" "}
            <span className="text-radial">$VYPEX</span>
          </h1>
          <p className="max-w-[400px] mx-auto text-[#6C7492] leading-7 text-[20px] font-normal text-center mb-12">
            Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac nisl sed varius
          </p>
          <Button className={"text-center mx-auto"}>Buy $VYPEX</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroPresales;
