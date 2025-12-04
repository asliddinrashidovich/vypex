import Contact from "../components/contact";
import HeaderTop from "../components/header-top";
import Footer from "../components/home/footer";
import Fqa from "../components/presale/fqa";
import Header from "../components/presale/header";
import HeroPresales from "../components/presale/hero";
import Reseilience from "../components/presale/reseilience";
import Utility from "../components/presale/utility";
import Questions from "../components/questions";
import Services from "../components/services";

function Presele() {
  return (
    <>
      <HeaderTop>TOKEN LIVE! BUY NOW!</HeaderTop>
      <Header />
      <HeroPresales />

      {/* <Hero/> */}
      <Utility />
      <Services>
        {" "}
        <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-20">
          Our token <br />
          <span className="text-radial">Partnership</span> with
        </h2>
      </Services>
      <Questions>
        <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-5">
          Our{" "}
          <span className="text-radial">RoadMap</span>
        </h2>
        <p className="max-w-[405px] mx-auto text-[#6C7492] leading-7 text-[17px] md:text-[20px] font-normal text-center mb-20">
          Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
          nisl sed varius
        </p>
      </Questions>
      <Reseilience/>
      <Fqa/>
      <Contact />
      <Footer />
    </>
  );
}

export default Presele;
