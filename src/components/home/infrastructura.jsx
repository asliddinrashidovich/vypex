import { infrastructure1, infrastructure2, infrastructure3 } from "../../data";
import Button from "../button";
import { useState } from "react";

function Infrastructura() {
    const [active, setActiveTab] = useState(1) 
    function getActiveTab() {
      if(active == 1) return infrastructure1
      else if(active == 2) return infrastructure2
      else return infrastructure3
    }
  return (
    <section className="mb-40 px-5">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="max-w-[605px] mx-auto text-center text-[#F5F9FF] text-[40px] md:text-[52px] font-semibold leading-[100%] mb-20">
          Fast & Scalable <br />
          <span className="text-radial">Infrastructure</span>
        </h2>
        <div className="flex flex-row max-[500px]:flex-col items-center gap-3 justify-center mb-6">
          <div onClick={() => setActiveTab(1)}>
            <Button type={active == 1 ? "primary" : "secondary"}>For Individuals</Button>
          </div>
          <div onClick={() => setActiveTab(2)}>
            <Button type={active == 2 ? "primary" : "secondary"}>For Businesses</Button>
          </div>
          <div onClick={() => setActiveTab(3)}>
            <Button type={active == 3 ? "primary" : "secondary"}>DePin</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
          {getActiveTab().map(item => (
            <div key={item.img} className="dark-card rounded-4xl p-6 duration-200 transition-all">
              <img src={item.img} alt={item.text} className="mb-[22px]"/>
              <h3 className="text-[#F1F1EF] leading-8 text-[24px] font-bold mb-3.5">{item.title}</h3>
              <h3 className="text-[#AFAFAF] leading-7 text-[18px] font-medium">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Infrastructura;
