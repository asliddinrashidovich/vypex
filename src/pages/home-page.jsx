import Footer from "../components/home/footer";
import Futures from "../components/home/futures";
import Header from "../components/home/header";
import HeaderTop from "../components/header-top";
import Hero from "../components/home/hero";
import Infrastructura from "../components/home/infrastructura";
import Questions from "../components/questions";
import Services from "../components/services";
import Upgrade from "../components/home/upgrade";
import Contact from "../components/contact";
import { ArrowUpToLine } from "lucide-react";

function HomePage() {
  return (
    <>
      <a 
        href="#top"
        className="fixed z-99 bottom-10 right-10 bg-[#F5F9FF] p-3 min-[400px]:p-4 cursor-pointer transition-all  duration-200 rounded-2xl main-btn"
      >
          <div className="flex items-center gap-3  ">
            <ArrowUpToLine />
            <span className="btn-gradient font-bold text-[20px] text-nowrap  leading-[100%]">Back to Top</span>
          </div>
      </a>
      <HeaderTop>LAUNCHING SOON! UP TO 10% REFFERAl BONUS</HeaderTop>
      <Header />
      <Hero />
      <Futures />
      <Upgrade />
      <Questions>
        <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-5">
          Upgrade your tradings with{" "}
          <span className="text-radial">Predictive AI</span>
        </h2>
        <p className="max-w-[405px] mx-auto text-[#6C7492] leading-7 text-[17px] md:text-[20px] font-normal text-center mb-20">
          Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
          nisl sed varius
        </p>
      </Questions>
      <Services>
        {" "}
        <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-20">
          Our services <br />
          <span className="text-radial">Integrated</span> with
        </h2>
      </Services>
      <Infrastructura />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
