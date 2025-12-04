import Collapser from "../collapser";

function Fqa() {
  return (
    <section className="px-5 mb-40">
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-20">
          Your Questions, <span className="text-radial"> Answered</span>
        </h2>
        <div className="flex flex-col gap-4 max-w-[1000px] mx-auto">
          <Collapser />
          <Collapser />
          <Collapser />
          <Collapser />
          <Collapser />
          <Collapser />
          <Collapser />
        </div>
      </div>
    </section>
  );
}

export default Fqa;
